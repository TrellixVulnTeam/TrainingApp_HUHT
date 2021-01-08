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
    
    createNewTraining(id:string) {
        this.name = "New training";
        this.id = id;
        this.rounds = 1;
        this.sets = [
            {
                set:1, 
                Ex_info:{
                    exercise: {
                        name: 'Push ups',
                        id: 1,
                        level: 2
                    },
                    reps: 1
                },
            },
        ];
        this.created_by = false;
    }

    getExercises(num:number){
        let ex:Exercise[] = [];
        let done:boolean = true;

        this.sets[1].forEach(e => {
            console.log(e);
            ex[ex.length] = e;
        });
        // if(num > 0){
        //     while(done){
        //         for (let x = 0; x < this.sets.length; x++) {
        //             this.sets[x].i
        //         }
        //     }
        // }else{
            
        // }

        return ex;
    }
//   [
//     [_num_, [{_reps_, ex1},{_reps_, ex2},{_reps_, ex3}]],
//     [_num_, [{_reps_, ex1},{_reps_, ex2},{_reps_, ex3}]],
//     [_num_, [{_reps_, ex1},{_reps_, ex2},{_reps_, ex3}]],
//  ]
// 
// [
//      _num_,
//      [
//         {_reps_, ex1}
//        ,{_reps_, ex2}
//        ,{_reps_, ex3}
//      ]
// ]
// set[1].forEach
// get to every line - get to the exs - get to reps
    getDuration(){
        let dr:number = 0;
        dr += 2 * this.getExercises(0).length + 1 * this.getExercises(0).length;
        
        if(dr >= 60){
            return Math.trunc(dr/60)+" hours, "+ /*Math.round(((dr/60) - Math.floor((dr/60))).toFixed(1)*60) +*/"min";
        }

        return dr + " min"; 
    }

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