export default function CheckEmptyEntires(array)
{
    let i; 
    array.forEach(entry => { i = entry.length === 0 ? i ++ : i; });
    return i;
};
