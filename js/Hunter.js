class Hunter  extends Traveler{
    constructor (name,food, isHealthy){
        super (name,food, isHealthy)
        this.food = 2
    }

    hunt() {
        this.food += 5
    }

    eat(){
        if (this.food >= 2){
            this.food -= 2
        }
        else if (this.food < 2){
            if (this.food === 1 || 0){
                this.food -= 1
                this.isHealthy = false
            }
        }
    }
    giveFood(traveler, numOfFoodUnits){
        if (numOfFoodUnits < this.food){
            this.food-=numOfFoodUnits
            traveler.food+=numOfFoodUnits
        } 
    }
}