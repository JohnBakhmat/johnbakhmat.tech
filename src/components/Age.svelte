<script>
  let age = "00.000000000";
  const birthday = new Date(2002, 0, 9).getTime();
  const getAge = () => {
    age = ((new Date().getTime() - birthday) / 31557600000)
      .toString()
      .slice(0, 12);
  };

  let interval;

  $: {
    clearInterval(interval);
    interval = setInterval(getAge, 50);
  }
</script>

<span class="font-mono">{age}</span>
