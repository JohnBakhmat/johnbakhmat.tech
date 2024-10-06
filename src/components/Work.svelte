<script lang="ts">
	import moment from "moment";

	export let start: string;
	export let end: string | undefined;
	export let logo: string;
	export let title: string;
	export let company: string;

	const formatDate = (date: string): string => {
		return moment(date).format("DD MMM YYYY");
	};

	const duration = (since: string, till?: string): string => {
		const startDate = moment(since);
		const endDate = moment(till);
		const monthsDiff = endDate.diff(startDate, "months");
		const daysDiff = endDate.diff(
			startDate.clone().add(monthsDiff, "months"),
			"days",
		);
		const monthString =
			monthsDiff > 0
				? `${monthsDiff} ${monthsDiff > 1 ? "months" : "month"}, `
				: "";

		const dayString =
			daysDiff > 0 ? `${daysDiff} ${daysDiff > 1 ? "days" : "day"}` : "";

		return `${monthString}${dayString}`;
	};
</script>

<div class="flex flex-row gap-4 items-center">
	<img
		src={logo}
		alt="work-icon"
		class="w-20 h-20 m-0"
		width="80"
		height="80"
	/>
	<div class="flex flex-col gap-2">
		<h3 class="flex gap-4 items-center">
			{title} at {company}
			<span class="opacity-50 text-base">
				({duration(start, end)})
			</span>
		</h3>
		<h5 class="opacity-50">
			<span>{formatDate(start)}</span> -
			<span>{!!end ? formatDate(end) : "present"}</span>
		</h5>
	</div>
</div>
