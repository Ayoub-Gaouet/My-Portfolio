export type Note = {
  title: string
  date: string
  readTime: string
  image: string
  category: "Dev" | "Design"
  link: string
}

export const notes: Note[] = [
  {
    title: "Unleashing Innovation with Design Sprints: A Beginner’s Guide",
    date: "5 octobre 2024",
    readTime: "5 min read",
    image: "/unleashing.png",
    category: "Design",
    link: "https://www.linkedin.com/pulse/unleashing-innovation-design-sprints-beginners-guide-ayoub-gaouet-1n9qe/?trackingId=6AAJ72vMTWWqGckpR8HHsg%3D%3D",
  },
  {
    title: "MVVM (Model-View-ViewModel)",
    date: "4 octobre 2024",
    readTime: "5 min read",
    image: "/MVVM.png",
    category: "Dev",
    link: "https://www.linkedin.com/pulse/mvvm-model-view-viewmodel-ayoub-gaouet-w6kne/?trackingId=M%2FJ0kcadTzu%2FE3bJmWADqQ%3D%3D",
  },
]

