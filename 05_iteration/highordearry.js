const mbs = [1,2,3,4,5,6,7]

// for (const i of mbs) {
//     console.log(i);   
// }

const coding = ['js', 'python', 'react', 'Java', 'native']

coding.forEach(( value, index , arr ) =>{
    // console.log( value, index , arr);
    
})

const myarr = [
    {
        lang : 'js',
        lib: 'react'
    },
    {
        lang : 'python',
        lib: 'django'
    },
    {
        lang : 'PHP',
        lib: 'Laravel'
    }
]

myarr.forEach((item) => {
    console.log(item.lang);
    
})