# Vue 3 • [TodoMVC](http://todomvc.com)

Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative, component-based programming model that helps you efficiently develop user interfaces of any complexity.


## Resources

- [Documentation](https://vuejs.org/guide/)
- [Blog](https://blog.vuejs.org/)
- [FAQ](https://vuejs.org/about/faq.html)

### Articles

- [Interesting article]()

### Support

- [Discord](https://discord.com/invite/HBherRA)
- [Github discussions](https://github.com/orgs/vuejs/discussions)
- [Dev community](https://dev.to/t/vue)


## Implementation

Project was started using `npm create vue@latest`.

It use the Options API rather than the Composition API to make it easy to read.

Design choices were made based on best practices.
For example, the `todoList` lives in the parent App component and passes it as props to the list and Footer.
Child components emit events that are handled by the App component which manipulates the list.

## Credit

Created by [Brice Durand](https://github.com/bricedurand)
