import './ItemListConteiner.css';

const ItemListConteiner = ({greeting}) => {
    return (<>
        <div className='itemListContainer'>
            <h1>{greeting}</h1>        
        </div>
    </>);
}
export default ItemListConteiner;