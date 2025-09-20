import { Blog } from '../types/blog';

export const mockBlogs: Blog[] = [
  {
    id: '1',
    title: 'Building Scalable Mobile Apps with React Native',
    excerpt: 'Learn the best practices for creating maintainable and scalable React Native applications that can grow with your business needs.',
    content: `# Building Scalable Mobile Apps with React Native

React Native has revolutionized mobile development by allowing developers to build cross-platform applications with a single codebase. However, as your app grows, maintaining scalability becomes crucial.

## Architecture Patterns

When building scalable React Native apps, consider these architectural patterns:

### 1. Feature-Based Structure
Organize your code by features rather than file types. This makes it easier to locate and maintain related code.

### 2. State Management
Use Redux or Zustand for complex state management. For simpler apps, React Context might suffice.

### 3. Navigation Structure
Implement a clear navigation hierarchy using React Navigation. Consider using stack, tab, and drawer navigators appropriately.

## Performance Optimization

### Memory Management
- Use FlatList for large datasets
- Implement proper image caching
- Avoid memory leaks with proper cleanup

### Bundle Size Optimization
- Use code splitting
- Implement lazy loading
- Remove unused dependencies

## Testing Strategy

A comprehensive testing strategy includes:
- Unit tests for business logic
- Integration tests for components
- E2E tests for critical user flows

## Conclusion

Building scalable React Native apps requires careful planning, proper architecture, and continuous optimization. By following these practices, you can create apps that perform well and are easy to maintain.`,
    author: 'Dinesh Kachhot',
    publishedAt: '2024-01-15',
    updatedAt: '2024-01-15',
    tags: ['React Native', 'Mobile Development', 'Architecture', 'Performance'],
    readTime: 8,
    likes: 42,
    shares: 15,
    imageUrl: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
    isPublished: true
  },
  {
    id: '2',
    title: 'Flutter vs React Native: A Comprehensive Comparison',
    excerpt: 'An in-depth analysis of Flutter and React Native, comparing performance, development experience, and ecosystem to help you choose the right framework.',
    content: `# Flutter vs React Native: A Comprehensive Comparison

Choosing between Flutter and React Native can be challenging. Both frameworks offer excellent cross-platform development capabilities, but they have distinct advantages and trade-offs.

## Development Experience

### React Native
- JavaScript/TypeScript familiarity
- Hot reload for faster development
- Large community and ecosystem
- Mature debugging tools

### Flutter
- Dart language learning curve
- Hot reload and hot restart
- Growing community
- Excellent debugging with DevTools

## Performance Comparison

### React Native
- Bridge communication can cause bottlenecks
- Native performance for most use cases
- Third-party library dependencies

### Flutter
- Compiled to native ARM code
- Consistent 60fps performance
- Custom rendering engine

## UI Development

### React Native
- Platform-specific components
- Native look and feel
- Styling with JavaScript objects

### Flutter
- Widget-based architecture
- Consistent UI across platforms
- Rich animation capabilities

## Ecosystem and Libraries

### React Native
- Mature ecosystem
- Extensive third-party libraries
- Strong community support

### Flutter
- Growing ecosystem
- Google's backing
- Comprehensive widget library

## When to Choose What?

### Choose React Native if:
- Your team has JavaScript expertise
- You need platform-specific UI
- You require extensive third-party integrations

### Choose Flutter if:
- You want consistent UI across platforms
- Performance is critical
- You're building a new app from scratch

## Conclusion

Both frameworks are excellent choices. Your decision should be based on your team's expertise, project requirements, and long-term maintenance considerations.`,
    author: 'Dinesh Kachhot',
    publishedAt: '2024-01-10',
    updatedAt: '2024-01-10',
    tags: ['Flutter', 'React Native', 'Comparison', 'Mobile Development'],
    readTime: 12,
    likes: 67,
    shares: 28,
    imageUrl: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
    isPublished: true
  },
  {
    id: '3',
    title: 'iOS Development with SwiftUI: Modern Approaches',
    excerpt: 'Explore the latest SwiftUI features and patterns for building beautiful, performant iOS applications with declarative syntax.',
    content: `# iOS Development with SwiftUI: Modern Approaches

SwiftUI has transformed iOS development with its declarative syntax and powerful features. Let's explore modern approaches to building iOS apps with SwiftUI.

## Declarative UI Development

SwiftUI's declarative approach makes UI development more intuitive:

\`\`\`swift
struct ContentView: View {
    @State private var count = 0
    
    var body: some View {
        VStack {
            Text("Count: \\(count)")
                .font(.largeTitle)
            
            Button("Increment") {
                count += 1
            }
            .buttonStyle(.borderedProminent)
        }
        .padding()
    }
}
\`\`\`

## State Management

### @State and @Binding
Use @State for local state and @Binding for shared state between views.

### @StateObject and @ObservedObject
For complex state management, use ObservableObject protocol with @StateObject and @ObservedObject.

### @EnvironmentObject
Share data across the entire app hierarchy with @EnvironmentObject.

## Navigation Patterns

### NavigationStack (iOS 16+)
The new NavigationStack provides better control over navigation:

\`\`\`swift
NavigationStack {
    List(items) { item in
        NavigationLink(item.title, value: item)
    }
    .navigationDestination(for: Item.self) { item in
        DetailView(item: item)
    }
}
\`\`\`

## Performance Optimization

### Lazy Loading
Use LazyVStack and LazyHStack for better performance with large datasets.

### View Modifiers
Create reusable view modifiers for consistent styling and better performance.

## Testing SwiftUI Views

SwiftUI views can be tested using XCTest and ViewInspector:

\`\`\`swift
func testButtonTap() {
    let view = ContentView()
    let button = try view.inspect().find(button: "Increment")
    try button.tap()
    // Assert state changes
}
\`\`\`

## Conclusion

SwiftUI continues to evolve, offering powerful tools for iOS development. By following modern patterns and best practices, you can build maintainable and performant iOS applications.`,
    author: 'Dinesh Kachhot',
    publishedAt: '2024-01-05',
    updatedAt: '2024-01-05',
    tags: ['iOS', 'SwiftUI', 'Swift', 'Mobile Development'],
    readTime: 10,
    likes: 35,
    shares: 12,
    imageUrl: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
    isPublished: true
  }
];

// Simulate API calls
export const getBlogById = (id: string): Blog | undefined => {
  return mockBlogs.find(blog => blog.id === id);
};

export const getAllBlogs = (): Blog[] => {
  return mockBlogs.filter(blog => blog.isPublished);
};

export const getBlogsByTag = (tag: string): Blog[] => {
  return mockBlogs.filter(blog => 
    blog.isPublished && blog.tags.some(t => t.toLowerCase().includes(tag.toLowerCase()))
  );
};