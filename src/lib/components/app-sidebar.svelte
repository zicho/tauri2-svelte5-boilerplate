<script lang="ts">
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import { getUiState } from "$lib/state/ui.svelte";
	import House from "lucide-svelte/icons/house";
	import Utensils from "lucide-svelte/icons/utensils";
  
  const uiState = getUiState();

  // Menu items.
  const items = [
   {
    title: "Home",
    url: "/",
    icon: House,
   },
   {
    title: "Recipes",
    url: "/recipes",
    icon: Utensils,
   },
   {
    title: "Template",
    url: "/template",
    icon: Utensils,
   },
  ];
 </script>
  
 <Sidebar.Root>
  <Sidebar.Content>
   <Sidebar.Group class="p-0"> 
    <!-- <Sidebar.GroupLabel>Application</Sidebar.GroupLabel> -->
    <Sidebar.GroupContent>
     <Sidebar.Menu class="gap-0">
      {#each items as item (item.title)}
       <Sidebar.MenuItem>
        <Sidebar.MenuButton isActive={uiState.currentPage === item.title} class="w-full rounded-none h-12 text-base tracking-wide">
         {#snippet child({ props })}
          <a href={item.url} {...props}>
           <item.icon />
           <span>{item.title}</span>
          </a>
         {/snippet}
        </Sidebar.MenuButton>
       </Sidebar.MenuItem>
      {/each}
     </Sidebar.Menu>
    </Sidebar.GroupContent>
   </Sidebar.Group>
  </Sidebar.Content>
 </Sidebar.Root>