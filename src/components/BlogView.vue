<script setup lang="ts">
import { ref } from "vue";
import Fuse from "fuse.js";
import Post from "../components/Post.vue";
import { type CollectionEntry } from "astro:content";

const props = defineProps<{ posts: CollectionEntry<"blog">[] }>();
const query = ref("");
const searchResult = reactive<Fuse.FuseResult<PostType>[] | null>();
</script>
