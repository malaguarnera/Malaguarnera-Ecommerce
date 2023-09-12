
const products = [
    {id: 1,nombre:'producto1',price: 1000,stock:500,imageUrl:'https://media.istockphoto.com/id/136541615/es/foto/avi%C3%B3n-modelo.jpg?s=612x612&w=0&k=20&c=eGt4s7YtW5rJQPMaXhps9A7QcuSLSKbIgZ4lKUD2U3U=', description: 'descripcion1'},
    {id: 2,nombre:'producto2',price: 2000,stock:5,imageUrl:'https://media.istockphoto.com/id/136541615/es/foto/avi%C3%B3n-modelo.jpg?s=612x612&w=0&k=20&c=eGt4s7YtW5rJQPMaXhps9A7QcuSLSKbIgZ4lKUD2U3U=', description: 'descripcion2'},
    {id: 3,nombre:'producto3',price: 3000,stock:200,imageUrl:'https://media.istockphoto.com/id/136541615/es/foto/avi%C3%B3n-modelo.jpg?s=612x612&w=0&k=20&c=eGt4s7YtW5rJQPMaXhps9A7QcuSLSKbIgZ4lKUD2U3U=', description: 'descripcion3'},
    {id: 4,nombre:'producto4',price: 4000,stock:50,imageUrl:'https://media.istockphoto.com/id/136541615/es/foto/avi%C3%B3n-modelo.jpg?s=612x612&w=0&k=20&c=eGt4s7YtW5rJQPMaXhps9A7QcuSLSKbIgZ4lKUD2U3U=', description: 'descripcion4'}]
    
   export const mfetch = ()=> new Promise((res,rej)=>{
    
    
        const condition = true
    
        if(condition){
          setTimeout(()=>{
            res(products)
          },3000)
            
         } else{
            rej('dinero no devuelto')
        }
    
    }) 

