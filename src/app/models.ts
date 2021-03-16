// Interface:
export interface Exercise {
    name: string;
    id: number;
    level: number;
}

// Classes:
export class Training {
    name:string;
    id:string;
    rounds:number;
    sets:any[];
    created_by:boolean;

    constructor(name:string, id:string, rounds:number, sets:any[], c:boolean) {
        this.name = name;
        this.id = id;
        this.rounds = rounds;
        this.sets = sets;
        this.created_by = c;
    }

    getExercises(){
        let n = [];
        let a = 0;
        for(let i = 0; i<this.sets.length;i++){
            for(let x = 0; x<this.sets[i].reps;x++){
                for(let y = 0; y<this.sets[i].ex.length;y++){
                    console.log(this.sets[i].ex[y].reps, this.sets[i].ex[y].name);
                    n[a] = this.sets[i].ex[y];
                    a++;
                }
            }
        }

        return n;
    }
    // getDuration(){
    //     let dr:number = 0;
    //     dr += 2 * this.getExercises(0).length + 1 * this.getExercises(0).length;
        
    //     if(dr >= 60){
    //         return Math.trunc(dr/60)+" hours, "+ /*Math.round(((dr/60) - Math.floor((dr/60))).toFixed(1)*60) +*/"min";
    //     }

    //     return dr + " min"; 
    // }

    getLevel(){
        // let avg:number = 0;
        // let ex:Exercise[] = this.getExercises(0);
        // for (let i = 1; i < ex.length; i++) {
        //     avg += ex.i.level;
        // }
        // return avg/ex.length;
    }
    getLevelString(){
        // let stars:string = "";
        // for (let i = 0; i < this.getLevel(); i++) {
        //     stars += "⭐";
        // }
        // return stars;
    }


}