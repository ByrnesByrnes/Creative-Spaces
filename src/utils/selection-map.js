
// filter by feature
export default function selectionMap( products ) {
    return {
        products: [
            {title: 'Featured', data: products.filter( item => item.featured === true )},
            {title: 'Regular', data: products.filter( item => item.featured !== true)}
        ]
    }
}