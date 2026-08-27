import { useParams } from "react-router-dom";

export default function ServiceDetails() {
    const { id } = useParams();
    const displayId = id.replace(/-/g, " ");

    return (
        <>
            <h1>{displayId}</h1>
            <img
                className="services-image"
                src={`https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800`}
                alt={displayId}
            />
        </>
    );
}
