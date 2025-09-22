<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <aside class="w-20 md:w-56 bg-[#162238] text-white flex flex-col items-center md:items-start p-4 space-y-6">
      <!-- Logo -->
      <div class="flex items-center space-x-2">
        <img src="./dmLogo.png" alt="Logo" class="w-10 h-10 rounded-full" />
        <span class="hidden md:block font-bold text-lg">Domore</span>
      </div>

      <!-- Navigation -->
      <nav class="flex flex-col space-y-4 w-full">
        <a href="#" class="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md">
          <span class="text-xl">👤</span>
          <span class="hidden md:block">Account</span>
        </a>
        <a href="#" class="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md">
          <span class="text-xl">🔲</span>
          <span class="hidden md:block">Dashboard</span>
        </a>
        <a href="#" class="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md">
          <span class="text-xl">📅</span>
          <span class="hidden md:block">Calendar</span>
        </a>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 relative p-6">
      <!-- Header -->
      <div class="flex justify-between items-center border-b pb-4 mb-6">
        <h1 class="text-3xl font-bold">DASHBOARD</h1>
        <button class="text-sm font-medium hover:underline">+ add planner</button>
      </div>

      <!-- Folders -->
      <div class="flex space-x-6 z-10 relative">
        <div class="flex flex-col items-center">
          <div class="w-24 h-20 bg-blue-400 rounded-md shadow-md"></div>
          <span class="mt-2 text-sm">Week 1</span>
        </div>
        <div class="flex flex-col items-center">
          <div class="w-24 h-20 bg-yellow-400 rounded-md shadow-md"></div>
          <span class="mt-2 text-sm">Week 2</span>
        </div>
        <div class="flex flex-col items-center">
          <div class="w-24 h-20 bg-purple-600 rounded-md shadow-md"></div>
          <span class="mt-2 text-sm">Week 3</span>
        </div>
      </div>

      <!-- Watermark -->
      <div class="absolute inset-0 flex justify-center items-center pointer-events-none opacity-10">
        <img src="./dmLogo.png" alt="watermark" class="w-96" />
      </div>
    </main>
  </div>
</template>

