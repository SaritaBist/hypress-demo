
import fetchCollections from "@/CollectionData";
import NavbarPage from "@/components/Navbar";

export default async function NavbarServer() {
    const data = await fetchCollections();
    const collections = data?.collections?.items || [];

    return <NavbarPage collections={collections} />;
}
