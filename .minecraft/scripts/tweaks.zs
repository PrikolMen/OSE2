var toRemove = [
    <item:tconstruct:efln_ball>,
    <item:tconstruct:earth_slime_sling>,
    <item:tconstruct:sky_slime_sling>,
    <item:tconstruct:ichor_slime_sling>,
    <item:tconstruct:ender_slime_sling>,
    <item:artifacts:helium_flamingo>
];
for item in toRemove {
    recipes.remove(item);
    loot.remove(item);
}