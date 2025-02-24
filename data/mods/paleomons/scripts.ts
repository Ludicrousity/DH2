export const Scripts: {[k: string]: ModdedBattleScriptsData} = {
	gen: 9,
	teambuilderConfig: {
		excludeStandardTiers: true,
		customTiers: ['Paleomons', 'Paleomons NFE', 'Paleomons LC'],
	},
	init() {
		// Cranidos
		this.modData("Learnsets", "cranidos").learnset.dazzlinggleam = ["9L1"];
		this.modData("Learnsets", "cranidos").learnset.moonblast = ["9L1"];
		this.modData("Learnsets", "cranidos").learnset.moonlight = ["9L1"];
		this.modData("Learnsets", "cranidos").learnset.playrough = ["9L1"];
		this.modData("Learnsets", "cranidos").learnset.sweetkiss = ["9L1"];
		this.modData("Learnsets", "cranidos").learnset.taunt = ["9L1"];
		delete this.modData('Learnsets', 'cranidos').learnset.toxic;
		// Rampardos
		this.modData("Learnsets", "rampardos").learnset.dazzlinggleam = ["9L1"];
		this.modData("Learnsets", "rampardos").learnset.moonblast = ["9L1"];
		this.modData("Learnsets", "rampardos").learnset.moonlight = ["9L1"];
		this.modData("Learnsets", "rampardos").learnset.playrough = ["9L1"];
		this.modData("Learnsets", "rampardos").learnset.sweetkiss = ["9L1"];
		this.modData("Learnsets", "rampardos").learnset.taunt = ["9L1"];
		delete this.modData('Learnsets', 'rampardos').learnset.toxic;
		// Shieldon
		this.modData("Learnsets", "shieldon").learnset.calmmind = ["9L1"];
		this.modData("Learnsets", "shieldon").learnset.confusion = ["9L1"];
		this.modData("Learnsets", "shieldon").learnset.dazzlinggleam = ["9L1"];
		this.modData("Learnsets", "shieldon").learnset.lightscreen = ["9L1"];
		this.modData("Learnsets", "shieldon").learnset.powergem = ["9L1"];
		this.modData("Learnsets", "shieldon").learnset.psybeam = ["9L1"];
		this.modData("Learnsets", "shieldon").learnset.psychic = ["9L1"];
		this.modData("Learnsets", "shieldon").learnset.psyshock = ["9L1"];
		this.modData("Learnsets", "shieldon").learnset.reflect = ["9L1"];
		delete this.modData('Learnsets', 'shieldon').learnset.flashcannon;
		delete this.modData('Learnsets', 'shieldon').learnset.heavyslam;
		delete this.modData('Learnsets', 'shieldon').learnset.irondefense;
		delete this.modData('Learnsets', 'shieldon').learnset.ironhead;
		delete this.modData('Learnsets', 'shieldon').learnset.irontail;
		delete this.modData('Learnsets', 'shieldon').learnset.metalburst;
		delete this.modData('Learnsets', 'shieldon').learnset.metalsound;
		// Bastiodon
		this.modData("Learnsets", "bastiodon").learnset.calmmind = ["9L1"];
		this.modData("Learnsets", "bastiodon").learnset.confusion = ["9L1"];
		this.modData("Learnsets", "bastiodon").learnset.dazzlinggleam = ["9L1"];
		this.modData("Learnsets", "bastiodon").learnset.lightscreen = ["9L1"];
		this.modData("Learnsets", "bastiodon").learnset.petroglyph = ["9L1"];
		this.modData("Learnsets", "bastiodon").learnset.powergem = ["9L1"];
		this.modData("Learnsets", "bastiodon").learnset.psybeam = ["9L1"];
		this.modData("Learnsets", "bastiodon").learnset.psychic = ["9L1"];
		this.modData("Learnsets", "bastiodon").learnset.psyshock = ["9L1"];
		this.modData("Learnsets", "bastiodon").learnset.reflect = ["9L1"];
		delete this.modData('Learnsets', 'bastiodon').learnset.flashcannon;
		delete this.modData('Learnsets', 'bastiodon').learnset.heavyslam;
		delete this.modData('Learnsets', 'bastiodon').learnset.irondefense;
		delete this.modData('Learnsets', 'bastiodon').learnset.ironhead;
		delete this.modData('Learnsets', 'bastiodon').learnset.irontail;
		delete this.modData('Learnsets', 'bastiodon').learnset.metalburst;
		delete this.modData('Learnsets', 'bastiodon').learnset.metalsound;
		// Archen
		this.modData("Learnsets", "archen").learnset.brickbreak = ["9L1"];
		this.modData("Learnsets", "archen").learnset.bulkup = ["9L1"];
		this.modData("Learnsets", "archen").learnset.coaching = ["9L1"];
		this.modData("Learnsets", "archen").learnset.dynamicpunch = ["9L1"];
		this.modData("Learnsets", "archen").learnset.furyattack = ["9L1"];
		this.modData("Learnsets", "archen").learnset.highjumpkick = ["9L1"];
		this.modData("Learnsets", "archen").learnset.machpunch = ["9L1"];
		this.modData("Learnsets", "archen").learnset.superpower = ["9L1"];
		delete this.modData('Learnsets', 'archen').learnset.pluck;
		delete this.modData('Learnsets', 'archen').learnset.roost;
		// Archeops
		this.modData("Learnsets", "archeops").learnset.axekick = ["9L1"];
		this.modData("Learnsets", "archeops").learnset.brickbreak = ["9L1"];
		this.modData("Learnsets", "archeops").learnset.bulkup = ["9L1"];
		this.modData("Learnsets", "archeops").learnset.closecombat = ["9L1"];
		this.modData("Learnsets", "archeops").learnset.coaching = ["9L1"];
		this.modData("Learnsets", "archeops").learnset.dynamicpunch = ["9L1"];
		this.modData("Learnsets", "archeops").learnset.focusblast = ["9L1"];
		this.modData("Learnsets", "archeops").learnset.furyattack = ["9L1"];
		this.modData("Learnsets", "archeops").learnset.highjumpkick = ["9L1"];
		this.modData("Learnsets", "archeops").learnset.machpunch = ["9L1"];
		this.modData("Learnsets", "archeops").learnset.superpower = ["9L1"];
		delete this.modData('Learnsets', 'archeops').learnset.fly;
		delete this.modData('Learnsets', 'archeops').learnset.pluck;
		delete this.modData('Learnsets', 'archeops').learnset.roost;
		delete this.modData('Learnsets', 'archeops').learnset.skyattack;
		// Tirtouga
		this.modData("Learnsets", "tirtouga").learnset.acidspray = ["9L1"];
		this.modData("Learnsets", "tirtouga").learnset.corrosivegas = ["9L1"];
		this.modData("Learnsets", "tirtouga").learnset.crosspoison = ["9L1"];
		this.modData("Learnsets", "tirtouga").learnset.darkpulse = ["9L1"];
		this.modData("Learnsets", "tirtouga").learnset.gunkshot = ["9L1"];
		this.modData("Learnsets", "tirtouga").learnset.poisonjab = ["9L1"];
		this.modData("Learnsets", "tirtouga").learnset.rapidspin = ["9L1"];
		this.modData("Learnsets", "tirtouga").learnset.sludgebomb = ["9L1"];
		this.modData("Learnsets", "tirtouga").learnset.sludgewave = ["9L1"];
		this.modData("Learnsets", "tirtouga").learnset.snatch = ["9L1"];
		this.modData("Learnsets", "tirtouga").learnset.taunt = ["9L1"];
		this.modData("Learnsets", "tirtouga").learnset.thief = ["9L1"];
		this.modData("Learnsets", "tirtouga").learnset.torment = ["9L1"];
		this.modData("Learnsets", "tirtouga").learnset.toxicspikes = ["9L1"];
		this.modData("Learnsets", "tirtouga").learnset.trashcompactor = ["9L1"];
		this.modData("Learnsets", "tirtouga").learnset.venoshock = ["9L1"];
		delete this.modData('Learnsets', 'tirtouga').learnset.meteorbeam;
		delete this.modData('Learnsets', 'tirtouga').learnset.rockblast;
		delete this.modData('Learnsets', 'tirtouga').learnset.rockpolish;
		delete this.modData('Learnsets', 'tirtouga').learnset.rockslide;
		delete this.modData('Learnsets', 'tirtouga').learnset.rockthrow;
		delete this.modData('Learnsets', 'tirtouga').learnset.rocktomb;
		delete this.modData('Learnsets', 'tirtouga').learnset.rollout;
		delete this.modData('Learnsets', 'tirtouga').learnset.smackdown;
		delete this.modData('Learnsets', 'tirtouga').learnset.stoneedge;
		// Carracosta
		this.modData("Learnsets", "carracosta").learnset.acidspray = ["9L1"];
		this.modData("Learnsets", "carracosta").learnset.corrosivegas = ["9L1"];
		this.modData("Learnsets", "carracosta").learnset.crosspoison = ["9L1"];
		this.modData("Learnsets", "carracosta").learnset.darkpulse = ["9L1"];
		this.modData("Learnsets", "carracosta").learnset.gunkshot = ["9L1"];
		this.modData("Learnsets", "carracosta").learnset.poisonjab = ["9L1"];
		this.modData("Learnsets", "carracosta").learnset.rapidspin = ["9L1"];
		this.modData("Learnsets", "carracosta").learnset.sludgebomb = ["9L1"];
		this.modData("Learnsets", "carracosta").learnset.sludgewave = ["9L1"];
		this.modData("Learnsets", "carracosta").learnset.snatch = ["9L1"];
		this.modData("Learnsets", "carracosta").learnset.taunt = ["9L1"];
		this.modData("Learnsets", "carracosta").learnset.thief = ["9L1"];
		this.modData("Learnsets", "carracosta").learnset.torment = ["9L1"];
		this.modData("Learnsets", "carracosta").learnset.toxicspikes = ["9L1"];
		this.modData("Learnsets", "carracosta").learnset.trashcompactor = ["9L1"];
		this.modData("Learnsets", "carracosta").learnset.venoshock = ["9L1"];
		delete this.modData('Learnsets', 'carracosta').learnset.meteorbeam;
		delete this.modData('Learnsets', 'carracosta').learnset.rockblast;
		delete this.modData('Learnsets', 'carracosta').learnset.rockpolish;
		delete this.modData('Learnsets', 'carracosta').learnset.rockslide;
		delete this.modData('Learnsets', 'carracosta').learnset.rockthrow;
		delete this.modData('Learnsets', 'carracosta').learnset.rocktomb;
		delete this.modData('Learnsets', 'carracosta').learnset.rollout;
		delete this.modData('Learnsets', 'carracosta').learnset.smackdown;
		delete this.modData('Learnsets', 'carracosta').learnset.stoneedge;
		// Tyrunt
		this.modData("Learnsets", "tyrunt").learnset.draconicrend = ["9L1"];
		this.modData("Learnsets", "tyrunt").learnset.jawlock = ["9L1"];
		delete this.modData('Learnsets', 'tyrunt').learnset.ancientpower;
		delete this.modData('Learnsets', 'tyrunt').learnset.meteorbeam;
		delete this.modData('Learnsets', 'tyrunt').learnset.rockblast;
		delete this.modData('Learnsets', 'tyrunt').learnset.rockpolish;
		delete this.modData('Learnsets', 'tyrunt').learnset.rockthrow;
		delete this.modData('Learnsets', 'tyrunt').learnset.rocktomb;
		delete this.modData('Learnsets', 'tyrunt').learnset.sandstorm;
		delete this.modData('Learnsets', 'tyrunt').learnset.stealthrock;
		// Tyrantrum
		this.modData("Learnsets", "tyrantrum").learnset.draconicrend = ["9L1"];
		this.modData("Learnsets", "tyrantrum").learnset.jawlock = ["9L1"];
		delete this.modData('Learnsets', 'tyrantrum').learnset.ancientpower;
		delete this.modData('Learnsets', 'tyrantrum').learnset.headsmash;
		delete this.modData('Learnsets', 'tyrantrum').learnset.meteorbeam;
		delete this.modData('Learnsets', 'tyrantrum').learnset.rockblast;
		delete this.modData('Learnsets', 'tyrantrum').learnset.rockpolish;
		delete this.modData('Learnsets', 'tyrantrum').learnset.rockthrow;
		delete this.modData('Learnsets', 'tyrantrum').learnset.rocktomb;
		delete this.modData('Learnsets', 'tyrantrum').learnset.sandstorm;
		delete this.modData('Learnsets', 'tyrantrum').learnset.stealthrock;
		// Amaura
		this.modData("Learnsets", "amaura").learnset.agility = ["9L1"];
		this.modData("Learnsets", "amaura").learnset.breakingswipe = ["9L1"];
		this.modData("Learnsets", "amaura").learnset.dracometeor = ["9L1"];
		this.modData("Learnsets", "amaura").learnset.dragonbreath = ["9L1"];
		this.modData("Learnsets", "amaura").learnset.dragonpulse = ["9L1"];
		this.modData("Learnsets", "amaura").learnset.nastyplot = ["9L1"];
		this.modData("Learnsets", "amaura").learnset.ominouswind = ["9L1"];
		this.modData("Learnsets", "amaura").learnset.recover = ["9L1"];
		delete this.modData('Learnsets', 'amaura').learnset.ancientpower;
		delete this.modData('Learnsets', 'amaura').learnset.aurorabeam;
		delete this.modData('Learnsets', 'amaura').learnset.auroraveil;
		delete this.modData('Learnsets', 'amaura').learnset.avalanche;
		delete this.modData('Learnsets', 'amaura').learnset.freezedry;
		delete this.modData('Learnsets', 'amaura').learnset.frostbreath;
		delete this.modData('Learnsets', 'amaura').learnset.meteorbeam;
		delete this.modData('Learnsets', 'amaura').learnset.powdersnow;
		delete this.modData('Learnsets', 'amaura').learnset.rockblast;
		delete this.modData('Learnsets', 'amaura').learnset.rockpolish;
		delete this.modData('Learnsets', 'amaura').learnset.rockslide;
		delete this.modData('Learnsets', 'amaura').learnset.rockthrow;
		delete this.modData('Learnsets', 'amaura').learnset.rocktomb;
		delete this.modData('Learnsets', 'amaura').learnset.stealthrock;
		delete this.modData('Learnsets', 'amaura').learnset.stoneedge;
		// Aurorus
		this.modData("Learnsets", "aurorus").learnset.agility = ["9L1"];
		this.modData("Learnsets", "aurorus").learnset.breakingswipe = ["9L1"];
		this.modData("Learnsets", "aurorus").learnset.dracometeor = ["9L1"];
		this.modData("Learnsets", "aurorus").learnset.dragonbreath = ["9L1"];
		this.modData("Learnsets", "aurorus").learnset.dragonpulse = ["9L1"];
		this.modData("Learnsets", "aurorus").learnset.nastyplot = ["9L1"];
		this.modData("Learnsets", "aurorus").learnset.ominouswind = ["9L1"];
		this.modData("Learnsets", "aurorus").learnset.recover = ["9L1"];
		delete this.modData('Learnsets', 'aurorus').learnset.ancientpower;
		delete this.modData('Learnsets', 'aurorus').learnset.aurorabeam;
		delete this.modData('Learnsets', 'aurorus').learnset.auroraveil;
		delete this.modData('Learnsets', 'aurorus').learnset.avalanche;
		delete this.modData('Learnsets', 'aurorus').learnset.freezedry;
		delete this.modData('Learnsets', 'aurorus').learnset.frostbreath;
		delete this.modData('Learnsets', 'aurorus').learnset.iciclespear;
		delete this.modData('Learnsets', 'aurorus').learnset.meteorbeam;
		delete this.modData('Learnsets', 'aurorus').learnset.powdersnow;
		delete this.modData('Learnsets', 'aurorus').learnset.rockblast;
		delete this.modData('Learnsets', 'aurorus').learnset.rockpolish;
		delete this.modData('Learnsets', 'aurorus').learnset.rockslide;
		delete this.modData('Learnsets', 'aurorus').learnset.rockthrow;
		delete this.modData('Learnsets', 'aurorus').learnset.rocktomb;
		delete this.modData('Learnsets', 'aurorus').learnset.stealthrock;
		delete this.modData('Learnsets', 'aurorus').learnset.stoneedge;

	},
};
