import "./Item.css";

export default function ItemDet({id, title, description, image, price}) {
    return (
        <li key={id}>
            <h2>{title}</h2>
            <p>{description}</p>
            <img src={image} width={200} alt="image_producto" />
            <p>$ {price}</p>
        </li>
    );
}