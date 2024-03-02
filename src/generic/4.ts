// Інтерфейс для властивостей компоненту
interface ComponentProps {
  title: string;
}

// Клас компонента з використанням generics
class Component<T extends ComponentProps> {
  constructor(public props: T) {}
}

// Клас сторінки, що успадковує компонент
class Page extends Component<ComponentProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}

// Використання
const pageProps: ComponentProps = { title: 'My Page' };
const page = new Page(pageProps);
page.pageInfo();

export {};
