<template>
	<p>{{title}}</p>  
</template>

<script>
	import { mapGetters } from 'vuex'
	export default {
		name: 'headComp',
		computed: mapGetters({
			'title': 'getTitle'
		})
	}
</script>