let itemsToRemove = [
	'tconstruct:efln_ball',
	'#tconstruct:slimeslings',
	'artifacts:helium_flamingo',
];
const removeTag = 'removed_items'

onEvent('item.tags', event => {
	for (let item of itemsToRemove) {
		event.add(removeTag, item)
	}
})

onEvent('recipes', event => {
	event.remove({output: '#minecraft:' + removeTag})
	event.remove({input: '#minecraft:' + removeTag})

	event.custom({
		type: "tconstruct:melting",
		ingredient: [
			{tag: "forge:cobblestone"}
		],
		result: {
			"fluid": "tconstruct:seared_stone",
			"amount": 125
		},
		temperature: 750,
		time: 59
	})
})

onEvent('lootjs', event => {
	event
		.addLootTableModifier('artifacts:entities/mimic')
		.removeLoot('artifacts:helium_flamingo')

})
