import caloriesIcon from "./../assets/images/calories-icon.svg"
import proteinIcon from "./../assets/images/protein-icon.svg"
import carbsIcon from "./../assets/images/carbs-icon.svg"
import fatIcon from "./../assets/images/fat-icon.svg"

/**
 * Return the french label for id
 * @param {string} id 
 * @returns {string}
 */
export function getLabel(id){
    switch(id){
        case "calorieCount": return "Calories";
        case "proteinCount": return "Proteines";
        case "carbohydrateCount": return "Glucides";
        case "lipidCount": return "Lipides";
        default: return ""
    }
}


/**
 * Return the unit for id
 * @param {string} id 
 * @returns {string}
 */
export function getUnit(id) {
    return id === "calorieCount" ? "kCal" : "g"
}

/**
 * Return the icon for id
 * @param {string} id 
 * @returns {string}
 */
export function getIcon(id) {
    switch(id){
        case "calorieCount": return caloriesIcon;
        case "proteinCount": return proteinIcon;
        case "carbohydrateCount": return carbsIcon;
        case "lipidCount": return fatIcon;
        default: return ""
    }
}

/**
 * Return the french translation from element
 * @param {string} element 
 * @returns {string}
 */
export function traduct(element) {
    switch(element){
        case "cardio": return "Cardio";
        case "intensity": return "Intensité";
        case "speed": return "Vitesse";
        case "strength": return "Force";
        case "endurance": return "Endurance";
        case "energy": return "Energie";
        default: return "";
    }
}

/**
 * Return the fay letter from index
 * @param {number} index 
 * @returns {string}
 */
export function getDayLetter(index) {
    return ["L", "M", "M", "J", "V", "S", "D"][index % 7];
}