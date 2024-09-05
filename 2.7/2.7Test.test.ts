import { pageObject } from "./2.7PageObject";
const page = new pageObject(); 

class Intern {
   //create a class for interns that includes the name phone and title for the intern.
   name: string; 
   phone: number; 
   title: string; 

   constructor(name:string, phone:number, title:string) {
      this.name = name; 
      this.phone = phone; 
      this.title = title; 
   }
}; 

let newInterns: Array<Intern> = [
   //create an array of Interns using your class 
   new Intern('Shawn', 8018008001, 'Psychic Detective'), 
   new Intern('Gus', 8018008001, 'Pharmaceutical Rep'), 
   new Intern('Jules', 8018018010, 'Detective'),
   new Intern('Lassie', 8038038003, 'Head Detective')
];

let addInterns = async (newInterns) => {
   //create a function to add the interns from your array
   await page.click(page.addEm); 
   await page.click(page.newEm); 
   await page.setInput(page.namInp, newInterns.name); 
   await page.setInput(page.phoInp, newInterns.phone); 
   await page.setInput(page.titleInp, newInterns.title);
   await page.click(page.saveBtn); 
   await page.driver.sleep(2000)
};

test('can add the bake off crew',async () => {
    await page.navigate(); 
    await page.getElement(page.addEm); 
    for(let i= 0; i < newInterns.length; i ++){
        await addInterns(newInterns[i]); 
    }; 
    await page.driver.quit(); 
})