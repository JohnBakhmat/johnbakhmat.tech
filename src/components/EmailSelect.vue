<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ref } from "vue";
import { useToast } from "@/components/ui/toast/use-toast";

const { toast } = useToast();

const handleCopy = () => {
  navigator.clipboard.writeText("johnbakhmat@gmail.com");
  toast({
    title: "\u2713 Email successfuly copied to clipboard",
  });
};
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger
      class="text-themeAccent hover:underline font-medium underline-offset-3px cursor-pointer"
    >
      Email
    </DropdownMenuTrigger>
    <DropdownMenuContent
      class="w-56 font-mono z-10 mt-2 w-56 rounded-xl border border-neutral-700 bg-themeBlack shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none"
    >
      <DropdownMenuItem class="cursor-pointer group" @click="handleCopy">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          class="w-4 h-4 group-hover:-rotate-24deg mr-2"
        >
          <title>Copy Icon</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
          />
        </svg>
        <span>Copy</span>
      </DropdownMenuItem>

      <DropdownMenuSeparator class="bg-neutral-700" />

      <a href="mailto:johnbakhmat@gmail.com" target="_blank">
        <DropdownMenuItem class="text-themeAccent cursor-pointer group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="{1.5}"
            stroke="currentColor"
            class="w-4 h-4 group-hover:-rotate-24deg mr-2"
          >
            <title>Send Icon</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
          <span>Send</span>
        </DropdownMenuItem>
      </a>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
