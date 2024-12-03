
import { gql } from '@apollo/client';
import client from "@/app/lib/apollo-client";


const GET_COLLECTIONS = gql`
  query ExampleQuery {
  collections {
    items {
      name
      assets {
        source
      }
    }
  }
}
`;

export default async function CollectionsPage() {
    const { data } = await client.query({
        query: GET_COLLECTIONS,
    });
    console.log("data",data)


    return (
        <div>
            <h1>Collections</h1>
            <ul>
                {/*{data.collections.items.map((item) => (*/}
                {/*    <li key={item.name}>*/}
                {/*        <h2>{item.name}</h2>*/}
                {/*        <img src={item.assets[0].source} alt={item.name} />*/}
                {/*    </li>*/}
                {/*))}*/}
            </ul>
        </div>
    );
}
