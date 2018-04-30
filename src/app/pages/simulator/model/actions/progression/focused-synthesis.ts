import {ProgressAction} from '../progress-action';
import {Simulation} from '../../../simulation/simulation';

export class FocusedSynthesis extends ProgressAction {

    canBeUsed(simulationState: Simulation): boolean {
        return true;
    }

    getBaseCPCost(simulationState: Simulation): number {
        return 5;
    }

    getBaseDurabilityCost(simulationState: Simulation): number {
        return 10;
    }

    getBaseSuccessRate(simulationState: Simulation): number {
        return simulationState.lastStep !== undefined && simulationState.lastStep.action.getName() === 'Observe' ? 100 : 50;
    }

    getIds(): number[] {
        return [100235, 100236, 100237, 100238, 100239, 100240, 100241, 100242];
    }

    getPotency(simulation: Simulation): number {
        return 200;
    }

}
