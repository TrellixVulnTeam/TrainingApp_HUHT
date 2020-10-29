// Interface:
export interface Exercise {
    name: string;
    id: number;
    level: number;
}
interface exerciseWithNum {
    exercise: Exercise;
    reps:number;
}

// Classes:
export class Training {
    name:string;
    id:number;
    rounds:number;
    exercisesWithReps:exerciseWithNum[];
    sets:any[][];
    created_by:boolean;

    constructor(id:number) {
        this.name = "New training";
        this.id = id;
        this.rounds = 1;
        this.exercisesWithReps = [{
            exercise: {
                name: 'Push ups',
                id: 1,
                level: 2
              },
            reps: 1
        }];
        this.sets = [[1, {
            exercise: {
                name: 'Push ups',
                id: 1,
                level: 2
              },
            reps: 1
        }, ]];
        this.created_by = false;
    }

    getExercises(num:number){
        let array:Exercise[] = [];
        let index:number = 0;
        if(num > 0 && num <= this.exercisesWithReps.length){
            array[0] = this.exercisesWithReps[0].exercise;
            let found:boolean = false;
            for(let i=0;i<num;i++){
                for(let j=0;j<index;j++){
                    if(array[j] == this.exercisesWithReps[i].exercise){
                        found = true;
                    }
                }
                if(!found){
                    array[index] = this.exercisesWithReps[i].exercise;
                }
                index++;
            }
        }else{
            array[0] = this.exercisesWithReps[0].exercise;
            let found:boolean = false;
            for(let i=0;i<this.exercisesWithReps.length;i++){
                for(let j=0;j<index;j++){
                    if(array[j] == this.exercisesWithReps[i].exercise){
                        found = true;
                    }
                }
                if(!found){
                    array[index] = this.exercisesWithReps[i].exercise;
                }
                index++;
            }
        }

        return array;
    }

    getDuration(){
        let dr:number = 0;
        dr += 2 * this.getExercises(0).length + 1 * this.getExercises(0).length;
        
        if(dr >= 60){
            return Math.trunc(dr/60)+" hours, "+ /*Math.round(((dr/60) - Math.floor((dr/60))).toFixed(1)*60) +*/"min";
        }

        return dr + " min"; 
    }

    getLevel(){
        let avg:number = 0;
        let ex:Exercise[] = this.getExercises(0);
        for (let i = 0; i < ex.length; i++) {
            avg += ex[i].level;
        }
        return avg/ex.length;
    }

    getLevelString(){
        let stars:string = "";
        for (let i = 0; i < this.getLevel(); i++) {
            stars += "⭐";
        }
        return stars;
    }
    // createSets(set:number[], ex:exerciseWithNum[]){
        
    // }
    // create(reps:number[], ex:Exercise[]){
        
    // }
}