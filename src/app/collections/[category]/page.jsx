
import ViewCategoryList from "@/components/ViewCategoryList";
import fetCollectionLists from "@/CollectionList";



const CategoryListPage =  async ({params})=>{
    const {category}=  await  params
     console.log("category",category)
    const categoryList = await fetCollectionLists(category)
      const categoryListData=categoryList.collections.items

    return(<>
        <ViewCategoryList categoryListData={categoryListData} category={category}/>
    </>)
}

export  default CategoryListPage