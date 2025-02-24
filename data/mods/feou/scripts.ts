export const Scripts: ModdedBattleScriptsData = {
	gen: 9,
	teambuilderConfig: {
        excludeStandardTiers: true,
        customTiers: ['FEOU', 'FENFE', 'FELC'],
	},
	actions: {
		inherit: true,
		canMegaEvo(pokemon) {
			const altForme = pokemon.baseSpecies.otherFormes && this.dex.species.get(pokemon.baseSpecies.otherFormes[0]);
			const item = pokemon.getItem();
			if (
				altForme?.isMega && altForme?.requiredMove &&
				pokemon.baseMoves.includes(this.dex.toID(altForme.requiredMove)) && !item.zMove
			) {
				return altForme.name;
			}
			switch (pokemon.baseSpecies.name) {
				case "Amphamence":
					if (item.name === "Salamencite") {
						return "Amphamence-Mega-X"; 
					}
					if (item.name === "Ampharosite") {
						return "Amphamence-Mega-Y"; 
					}
					break;
				case "Tyranix":
					if (item.name === "Tyranitarite") {
						return "Tyranix-Mega-X"; 
					}
					if (item.name === "Steelixite") {
						return "Tyranix-Mega-Y"; 
					}
					break;
				case "Mawlakazam":
					if (item.name === "Mawilite") {
						return "Mawlakazam-Mega-X"; 
					}
					if (item.name === "Alakazite") {
						return "Mawlakazam-Mega-Y"; 
					}
					break;
			}
			
			return item.megaStone;
		},
		canUltraBurst(pokemon) {
			if (['Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane'].includes(pokemon.baseSpecies.name) &&
				pokemon.getItem().id === 'ultranecroziumz') {
				return "Necrozma-Ultra";
			}
			if (['Necrotrik-Dawn-Wings'].includes(pokemon.baseSpecies.name) &&
				pokemon.getItem().id === 'depletedultranecroziumz') {
				return "Necrotrik-Ultra";
			}
			return null;
		},

		/*
  			runMove(moveOrMoveName, pokemon, targetLoc, sourceEffect, zMove, externalMove, maxMove, originalTarget) {
				pokemon.activeMoveActions++;
				let target = this.battle.getTarget(pokemon, maxMove || zMove || moveOrMoveName, targetLoc, originalTarget);
				let baseMove = this.dex.getActiveMove(moveOrMoveName);
				const pranksterBoosted = baseMove.pranksterBoosted;
				if (baseMove.id !== 'struggle' && !zMove && !maxMove && !externalMove) {
					const changedMove = this.battle.runEvent('OverrideAction', pokemon, target, baseMove);
					if (changedMove && changedMove !== true) {
						baseMove = this.dex.getActiveMove(changedMove);
						if (pranksterBoosted) baseMove.pranksterBoosted = pranksterBoosted;
						target = this.battle.getRandomTarget(pokemon, baseMove);
					}
				}
				let move = baseMove;
				if (zMove) {
					move = this.getActiveZMove(baseMove, pokemon);
				} else if (maxMove) {
					move = this.getActiveMaxMove(baseMove, pokemon);
				}
		
				move.isExternal = externalMove;
		
				this.battle.setActiveMove(move, pokemon, target);
		
				const willTryMove = this.battle.runEvent('BeforeMove', pokemon, target, move);
				if (!willTryMove) {
					this.battle.runEvent('MoveAborted', pokemon, target, move);
					this.battle.clearActiveMove(true);
					// The event 'BeforeMove' could have returned false or null
					// false indicates that this counts as a move failing for the purpose of calculating Stomping Tantrum's base power
					// null indicates the opposite, as the Pokemon didn't have an option to choose anything
					pokemon.moveThisTurnResult = willTryMove;
					return;
				}
		
				// Used exclusively for a hint later
				if (move.flags['cantusetwice'] && pokemon.lastMove?.id === move.id) {
					pokemon.addVolatile(move.id);
				}
		
				if (move.beforeMoveCallback) {
					if (move.beforeMoveCallback.call(this.battle, pokemon, target, move)) {
						this.battle.clearActiveMove(true);
						pokemon.moveThisTurnResult = false;
						return;
					}
				}
				pokemon.lastDamage = 0;
				let lockedMove;
				if (!externalMove) {
					lockedMove = this.battle.runEvent('LockMove', pokemon);
					if (lockedMove === true) lockedMove = false;
					if (!lockedMove) {
						if (!pokemon.deductPP(baseMove, null, target) && (move.id !== 'struggle')) {
							this.battle.add('cant', pokemon, 'nopp', move);
							this.battle.clearActiveMove(true);
							pokemon.moveThisTurnResult = false;
							return;
						}
					} else {
						sourceEffect = this.dex.conditions.get('lockedmove');
					}
					pokemon.moveUsed(move, targetLoc);
				}
		
				// Dancer Petal Dance hack
				// TODO: implement properly
				const noLock = externalMove && !pokemon.volatiles['lockedmove'];
		
				if (zMove) {
					if (pokemon.illusion) {
						this.battle.singleEvent('End', this.dex.abilities.get('Illusion'), pokemon.abilityState, pokemon);
					}
					this.battle.add('-zpower', pokemon);
					pokemon.side.zMoveUsed = true;
				}
		
				const oldActiveMove = move;
		
				const moveDidSomething = this.useMove(baseMove, pokemon, target, sourceEffect, zMove, maxMove);
				this.battle.lastSuccessfulMoveThisTurn = moveDidSomething ? this.battle.activeMove && this.battle.activeMove.id : null;
				if (this.battle.activeMove) move = this.battle.activeMove;
				this.battle.singleEvent('AfterMove', move, null, pokemon, target, move);
				this.battle.runEvent('AfterMove', pokemon, target, move);
				if (move.flags['cantusetwice'] && pokemon.removeVolatile(move.id)) {
					this.battle.add('-hint', `Some effects can force a Pokemon to use ${move.name} again in a row.`);
				}
		
				// Dancer's activation order is completely different from any other event, so it's handled separately
				if (move.flags['dance'] && moveDidSomething && !move.isExternal) {
					const dancers = [];
					for (const currentPoke of this.battle.getAllActive()) {
						if (pokemon === currentPoke) continue;
						if (currentPoke.hasAbility('choreography') && !currentPoke.abilityState.choreography && !currentPoke.isSemiInvulnerable()) {
							dancers.push(currentPoke);
						}
					}
					// Dancer activates in order of lowest speed stat to highest
					// Note that the speed stat used is after any volatile replacements like Speed Swap,
					// but before any multipliers like Agility or Choice Scarf
					// Ties go to whichever Pokemon has had the ability for the least amount of time
					dancers.sort(
						(a, b) => -(b.storedStats['spe'] - a.storedStats['spe']) || b.abilityOrder - a.abilityOrder
					);
					const targetOf1stDance = this.battle.activeTarget!;
					for (const dancer of dancers) {
						if (this.battle.faintMessages()) break;
						if (dancer.fainted) continue;
						this.battle.add('-activate', dancer, 'ability: Choreography');
						const dancersTarget = !targetOf1stDance.isAlly(dancer) && pokemon.isAlly(dancer) ?
							targetOf1stDance :
							pokemon;
						const dancersTargetLoc = dancer.getLocOf(dancersTarget);
						this.runMove(move.id, dancer, dancersTargetLoc, this.dex.abilities.get('choreography'), undefined, true);
						dancer.abilityState.choreography = true;
					}
				}
				if (noLock && pokemon.volatiles['lockedmove']) delete pokemon.volatiles['lockedmove'];
				this.battle.faintMessages();
				this.battle.checkWin();
			},*/
	},
	pokemon: { 
		/*
		runImmunity(type: string, message?: string | boolean) {
			if (!type || type === '???') return true;
			if (!(type in this.battle.dex.data.TypeChart)) {
				if (type === 'Fairy' || type === 'Dark' || type === 'Steel') return true;
				throw new Error("Use runStatusImmunity for " + type);
			}
			if (this.fainted) return false;
			const negateResult = this.battle.runEvent('NegateImmunity', this, type);
			let isGrounded;
			if (type === 'Ground') {
				isGrounded = this.isGrounded(!negateResult);
				if (isGrounded === null) {
					if (message) {
						if (this.hasAbility('holygrail')) {
							this.battle.add('-immune', this, '[from] ability: Holy Grail');
						} else if (this.hasAbility('risingtension')) {
							this.battle.add('-immune', this, '[from] ability: Rising Tension');
						} else if (this.hasAbility('freeflight')) {
							this.battle.add('-immune', this, '[from] ability: Free Flight');
						} else if (this.hasAbility('airbornearmor')) {
							this.battle.add('-immune', this, '[from] ability: Airborne Armor');
						} else {
							this.battle.add('-immune', this, '[from] ability: Levitate');
						}
					}
					return false;
				}
			}
			if (!negateResult) return true;
			if ((isGrounded === undefined && !this.battle.dex.getImmunity(type, this)) || isGrounded === false) {
				if (message) {
					this.battle.add('-immune', this);
				}
				return false;
			}
			return true;
		}, */
		isGrounded(negateImmunity = false) {
			if ('gravity' in this.battle.field.pseudoWeather) return true;
			if ('ingrain' in this.volatiles && this.battle.gen >= 4) return true;
			if ('smackdown' in this.volatiles) return true;
			const item = (this.ignoringItem() ? '' : this.item);
			if (item === 'ironball') return true;
			// If a Fire/Flying type uses Burn Up and Roost, it becomes ???/Flying-type, but it's still grounded.
			if (!negateImmunity && this.hasType('Flying') && !('roost' in this.volatiles)) return false;
			if (
				(this.hasAbility(['levitate', 'holygrail', 'risingtension', 'freeflight', 'airbornearmor', 'hellkite','honeymoon','aircontrol'])) &&
				!this.battle.suppressingAbility(this)
			) return null;
			if ('magnetrise' in this.volatiles) return false;
			if ('telekinesis' in this.volatiles) return false;
			return item !== 'airballoon';
		 },
     },
};
