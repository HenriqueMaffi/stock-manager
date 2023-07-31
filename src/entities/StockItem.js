export const CATEGORIES = ["Games", "Books", "Toys", "Acessories"];

export default class Stockitem {
    constructor({name, description, quantity, price, category}){

        function generateUniqueId() {
            const timestamp = Date.now();
            const randomNum = Math.floor(Math.random() * 10000); // Adjust the range as needed
            const uniqueId = `${timestamp}-${randomNum}`;
            return uniqueId;
          }

        this.id = generateUniqueId()
        this.name = name
        this.description = description
        this.quantity = +quantity
        this.price = +price
        this.category = category
        this.createdAt = new Date()
        this.updatedAt = new Date()
        this.#validate()
    }
        
        #validate() {
            const validName = typeof this.name === "string"
            const validDescription = typeof this.description === "string"
            const validQuantity = typeof this.quantity === "number" && Number.isInteger(this.quantity)
            const validPrice = typeof this.price === "number"
            const validCategory = CATEGORIES.includes(this.category)
            if (!(
              validName &&
              validDescription &&
              validQuantity &&
              validPrice &&
              validCategory
            )) {
              throw new Error("Invalid item!")
            }
        }

    
}