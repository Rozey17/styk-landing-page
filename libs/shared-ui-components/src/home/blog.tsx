const articles = [
  {
    author: 'By Claire Robinson',
    title: 'Receive money in any currency with no fees',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia illum vitae omnis consequuntur distinctio minus esse molestiae.',
    imgPath: '/images/image-instructor.jpg',
    imgAlt: 'multiple bills with different values and currencies',
  },
  {
    author: 'By Wilson Hutton',
    title: 'Treat yourself without worrying about money',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi ullam repellendus aut beatae, ipsam nemo nobis?',
    imgPath: '/images/image-training.jpg',
    imgAlt: 'someone eating a hamburguer in a restaurant',
  },
  {
    author: 'By Wilson Hutton',
    title: 'Take your Easybank card wherever you go',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga nisi natus nulla explicabo culpa in ducimus.',
    imgPath: '/images/image-student.jpg',
    imgAlt: 'A plane in the sky',
  },
  {
    author: 'By Claire Robinson',
    title: 'Our invite-only Beta accounts are now live!',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti quaerat delectus harum tenetur. Laudantium, aliquid?',
    imgPath: '/images/driving-instructor1.png',
    imgAlt: 'Falling confetti',
  },
];

export function Blog() {
  return (
    <section className="py-14 lg:py-24">
      <div className="container">
        <h2 className="text-center text-3xl lg:text-4xl text-primary-dark-blue mb-5 lg:text-left lg:mb-10">
          Latest Articles
        </h2>
        <div className="grid grid-cols-1 gap-5 lg:gap-7 lg:grid-cols-4">
          {articles.map((article) => (
            <article key={article.title} className="bg-white">
              <div className="aspect-w-16 aspect-h-10 lg:aspect-w-4 lg:aspect-h-3">
                <img
                  className="object-cover"
                  src={article.imgPath}
                  alt={article.imgAlt}
                />
              </div>

              <div className="px-7 pt-5 pb-10 lg:p-6">
                <span className="text-neutral-grayish-blue text-xs">
                  {article.author}
                </span>
                <h4 className="text-primary-dark-blue text-sm py-2 hover:text-indigo-400">
                  <a href="#">{article.title}</a>
                </h4>
                <p className="text-neutral-grayish-blue text-xs">
                  {article.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
