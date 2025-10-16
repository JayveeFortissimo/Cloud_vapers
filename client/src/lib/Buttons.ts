interface BtnConfig{
name:string, 
links:string, 
variant:"default" | "link" | "destructive" | "outline" | "secondary" | "ghost" | "productBtn" | null | undefined, 
classname:string
}

export const BTN:BtnConfig[] = [
    {
        name:"More details",
        links:'',
        variant:'ghost',
        classname:''
    },
     {
        name:"Add to cart",
        links:'',
        variant:'productBtn',
        classname:''
    }

]


