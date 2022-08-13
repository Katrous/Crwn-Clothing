import './directory.styles.scss';
import CategoryItem from "../category-item/category-item.component";

const Directory = ({categories}) => {
    // destructure as we recieve in a this.categories not categories!
    return (
        <div className="directory-container">
        {/* Here we are going to use the () around map callback as we are returning JSX
        We also destructure title directly inside the callback arguments */}
        {categories.map((category) => (
          <CategoryItem key={category.key} title={category.title} imageUrl={category.imageUrl} />
        ))}
        </div>
    )
}

export default Directory;