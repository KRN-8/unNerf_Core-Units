Events.on(ContentInitEvent, () => {
	Vars.content.blocks().each(b => b instanceof CoreBlock, u => {
		u.unitType.weapons.each(w => {
			w.bullet.buildingDamageMultiplier = 1;
		});
	});
});
