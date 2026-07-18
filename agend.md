# Panduan Arsitektur & Aturan TanStack Start

Peringatan: Proyek ini menggunakan **TanStack Start**, _full-stack React framework_ modern yang dibangun di atas ekosistem TanStack Router dan Vinxi. Pendekatan _routing_ dan _data fetching_-nya sangat terintegrasi. Pastikan untuk selalu merujuk pada dokumentasi resmi TanStack Start dan TanStack Router.

## 1. Modern Folder Structure

Gunakan pola struktur direktori `src/` untuk memisahkan kode aplikasi dari file konfigurasi di _root_. Konsep ini menggunakan _file-based routing_ bawaan dari TanStack Router.

```text
📂 src/
├── 📂 routes/       # Rute aplikasi menggunakan ekosistem TanStack Router
│   └── 📂 about/    # Contoh folder halaman (misal: rute /about)
│       ├── 📂 _component/  # Komponen lokal yang hanya digunakan di halaman ini
│       ├── 📂 _partials/   # Container pembagi struktur atau seksi besar khusus halaman ini
│       └── 📄 route.tsx    # Entry point halaman, definisi rute dan pemanggilan komponen _partials
├── 📂 components/   # Reusable UI components
│   └── 📂 ui/       # Presentational components murni / atomik (Button, Input, Modal, dll)
├── 📂 hooks/        # Custom React hooks (termasuk penyusunan custom hooks TanStack Query)
├── 📂 lib/          # Utility functions dan konfigurasi pihak ketiga (termasuk konfigurasi HTTP client)
├── 📂 services/     # Fungsi murni untuk pemanggilan API eksternal (menggunakan HTTP utils)
└── 📂 store/        # Zustand store untuk global client state

```

### Aturan Struktur Halaman (Routing):

Di TanStack Start, setiap rute di dalam folder `src/routes/` menggunakan pemisahan file internal sebagai berikut:

- **`_component/`**: Folder privat untuk menyimpan komponen kecil yang spesifik hanya digunakan oleh halaman tersebut. Awalan _underscore_ (`_`) menandakan ini bukan bagian dari rute URL.
- **`_partials/`**: Folder privat untuk menyimpan komponen berskala besar (_layout container_ atau seksi halaman) yang menyusun struktur utama halaman.
- **`route.tsx`**: File definisi rute untuk TanStack Router (biasanya berisi `createFileRoute`). File ini bertindak sebagai _orchestrator_ bersih yang memanggil komponen dari folder `_partials/`. Hindari menulis kode UI yang panjang di sini.

## 2. Prinsip Clean Code

- **Single Responsibility:** Satu komponen atau fungsi sebaiknya hanya memiliki satu tanggung jawab pokok.
- **Pemisahan Logic dan UI:** Hindari menulis logika pengambilan data (_fetching_) atau pengelolaan _state_ yang kompleks di dalam komponen UI. Ekstraksi logika tersebut ke dalam _custom hooks_ atau manfaatkan fitur `loader` dari TanStack Router.
- **Penamaan yang Deskriptif:** Gunakan nama yang jelas dan mencerminkan fungsionalitas aslinya untuk variabel, komponen, dan fungsi.

## 3. Server-Side Logic & Client Rendering

- **Server Functions (`createServerFn`):** TanStack Start menggunakan RPC (_Remote Procedure Call_) untuk menjalankan logika server. Ini digunakan jika kamu butuh mengeksekusi kode di server (seperti akses database langsung) yang nantinya bisa dipanggil langsung dari klien.
- **Client-First dengan SSR:** Aplikasi di-render di server pada _initial load_ untuk optimasi SEO, namun interaksi selanjutnya berjalan sepenuhnya layaknya _Single Page Application_ (SPA) di sisi klien.

## 4. HTTP Utility Function

Gunakan sebuah _utility function_ terpusat yang menangani HTTP request. Utilitas ini bertindak sebagai _wrapper_ murni untuk menyederhanakan pemanggilan method HTTP.

- Simpan konfigurasi ini di dalam `src/lib/http.ts`.

```typescript
// Contoh implementasi fungsi HTTP di src/lib/http.ts
const BASE_URL = import.meta.env.VITE_API_URL || ""; // Sesuaikan dengan env TanStack Start (Vite)

export const http = {
  get: async <T>(url: string): Promise<T> => {
    const response = await fetch(`${BASE_URL}${url}`, { method: "GET" });
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
  },
  post: async <T>(url: string, data: any): Promise<T> => {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
  },
  // Tambahkan implementasi put, delete, dll. sesuai kebutuhan
};
```

## 5. API Services

Letakkan semua interaksi langsung ke API di dalam folder `services/`. Di sinilah kamu memanggil HTTP _utility_ yang sudah dibuat sebelumnya. Jangan pernah memanggil `http.get` atau `fetch` langsung dari dalam komponen React.

```typescript
// src/services/user.service.ts
import { http } from "@/lib/http";

export const fetchUsers = async () => {
  return await http.get("/users");
};

export const createUser = async (payload: any) => {
  return await http.post("/users", payload);
};
```

## 6. Data Fetching dengan TanStack Query & Router

Di TanStack Start, praktik terbaik adalah mengintegrasikan **TanStack Query** dengan fitur `loader` pada rute agar data bisa di-_prefetch_ sebelum halaman dirender. Gunakan _custom hooks_ untuk memanggilnya di level komponen.

```typescript
// src/hooks/useUsers.ts
import { useSuspenseQuery, useMutation } from "@tanstack/react-query";
import { fetchUsers, createUser } from "@/services/user.service";

// Di TanStack Start, useSuspenseQuery sangat disarankan saat digabungkan dengan route loaders
export const useGetUsers = () => {
  return useSuspenseQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
};

export const useCreateUser = () => {
  return useMutation({
    mutationFn: createUser,
  });
};
```

## 7. Global State Management dengan Zustand

Gunakan **Zustand** _hanya_ untuk mengelola status global di sisi klien (_client state_), seperti pengaturan tema, status visibilitas _sidebar_, atau data sementara formulir _multi-step_.

- **Penting:** Hindari menggunakan Zustand untuk menyimpan data hasil respons fetch API. Biarkan TanStack Query yang bertanggung jawab penuh atas _server state_ beserta manajemen _cache_-nya.
- Simpan konfigurasi store di dalam direktori `src/store/`.

```typescript
// src/store/useUIStore.ts
import { create } from "zustand";

interface UIState {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  isSidebarOpen: false,
  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
}));
```
