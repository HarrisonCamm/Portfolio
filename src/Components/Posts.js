import React from 'react';
import './Posts.css';

const Posts = () => {
  // Example blog post data - you can later move this to a separate data file
  const blogPosts = [
    {
      id: 1,
      title: "The Unlockable Content Feature in Gardener's Grove",
      date: "December 10, 2024",
      content: `
        <h1>The Unlockable Content Feature in Gardener's Grove</h1>
        <p>The unlockable content feature in Gardener's Grove presented a classic object-oriented programming (OOP) problem involving the design and management of a system that supports multiple item types, user customization, and persistent state changes. The challenge required the careful application of OOP principles such as encapsulation, abstraction, inheritance, and polymorphism to ensure the system was scalable, maintainable, and robust.</p>
        <h2>The Object-Oriented Problem</h2>
        <p>The primary OOP challenge was designing a system to manage two key concepts: an Inventory for users and a Shop where users could purchase items using an in-game currency, Blooms. The system needed to handle:</p>
        <ul>
          <li><strong>Different Item Types:</strong> Items such as profile banners, badges, frames, and color schemes, each with distinct attributes and functionalities.</li>
          <li><strong>Ownership and Persistence:</strong> Users needed to own multiple instances of items, and this ownership had to be persistently managed.</li>
          <li><strong>Interactions:</strong> Actions such as buying, viewing, and selling items, with rules around affordability and resale value.</li>
          <li><strong>Concurrency and Scalability:</strong> Ensuring thread safety, especially in shared resources like the Shop, and enabling future scalability.</li>
        </ul>
        <p>These requirements implied a need for a clean architecture where classes and relationships adhered to principles such as the Single Responsibility Principle and Separation of Concerns.</p>
        <h2>How the Problem Was Addressed</h2>
        <h3>Initial Design and Implementation</h3>
        <ul>
          <li><strong>Item Class Hierarchy:</strong> An abstract Item class was created to represent shared attributes (e.g., name, price, picture). Subclasses like ProfileBanner, UserProfileFrame, and Badge extended Item to provide type-specific functionality.</li>
          <li><strong>User Inventory:</strong> Initially implemented as a list of items within the User class. The inventory was designed to track ownership and quantities but without the abstraction of a dedicated Inventory class.</li>
          <li><strong>Shop:</strong> The Shop was implemented as a Singleton to ensure a single instance across the system. It managed the list of items available for purchase and allowed transactions between the user and the system.</li>
          <li><strong>Transaction Handling:</strong> Purchase logic deducted Blooms from the user, added items to their inventory, and handled errors like insufficient funds. Selling logic calculated resale value, removed the item from inventory, and added the equivalent Blooms back to the user.</li>
        </ul>
        <h3>What Worked Well</h3>
        <ul>
          <li><strong>Polymorphism:</strong> Using an abstract Item class allowed the shop and inventory to work with any item type without needing specific code for each subclass.</li>
          <li><strong>User Feedback:</strong> Features like error messages for insufficient funds and confirmations for successful purchases were implemented effectively.</li>
          <li><strong>Pair Programming:</strong> Collaborating with team members on parts of the system ensured faster progress and better problem-solving.</li>
        </ul>
        <h3>Issues Encountered</h3>
        <ul>
          <li><strong>Inventory Design:</strong> By storing items as a simple list, the system created a one-to-many relationship where only one user could own a specific item instance. This violated the expected behavior of independent ownership and required reengineering late in the sprint.</li>
          <li><strong>Shop Singleton:</strong> While the Singleton pattern ensured a single Shop instance, it introduced potential thread-safety issues, as multiple users could attempt transactions simultaneously. This design also complicated testing and introduced unnecessary coupling.</li>
          <li><strong>Code Conflicts:</strong> Poor communication about feature implementation led to redundant and conflicting code, which required stitching and refactoring late in development.</li>
          <li><strong>Branch Management:</strong> Working on multiple ACs within a single branch led to extended merge conflicts and code quality issues, delaying progress and adding complexity.</li>
        </ul>
        <h2>How It Could Have Been Done Better</h2>
        <h3>Improved Inventory Design</h3>
        <p>Introducing an Inventory class as a standalone entity would have resolved many issues. This class could manage items, track quantities, and abstract ownership away from the User class. For instance:</p>
        <pre><code class="language-java">
        public class Inventory {
            private Map&lt;Item, Integer&gt; items;

            public void addItem(Item item) {
                items.put(item, items.getOrDefault(item, 0) + 1);
            }

            public void removeItem(Item item) {
                if (items.containsKey(item)) {
                    items.put(item, items.get(item) - 1);
                    if (items.get(item) &lt;= 0) items.remove(item);
                }
            }
        }
        </code></pre>
        <p>This approach would have adhered to the Single Responsibility Principle and Separation of Concerns, making the system more modular and easier to extend.</p>
        <h3>Thread-Safe Shop</h3>
        <p>Instead of a Singleton, the Shop class could have been implemented as a stateless service that interacts with a database or repository to retrieve items for sale. Concurrency issues could be addressed using transactions within a relational database or optimistic locking.</p>
        <h3>Top-Down Architectural Design</h3>
        <p>A more deliberate architectural design phase at the start of the sprint could have prevented later conflicts. For example:</p>
        <ul>
          <li>Clearly defining relationships (e.g., users, inventories, shops) upfront.</li>
          <li>Agreeing on design patterns like the Repository pattern for database access.</li>
        </ul>
        <h3>Communication and Coordination</h3>
        <p>Regular check-ins to synchronize progress and decisions would have prevented the duplication of features and code conflicts.</p>
        <h3>Branch Management and Testing</h3>
        <p>Keeping branches scoped to a single AC and using separate branches for testing would have minimized conflicts and streamlined code integration. Tools like feature toggles could have helped test incomplete features without blocking progress.</p>
        <h3>Code Quality and Coverage</h3>
        <p>Addressing SonarQube warnings early and consistently would have improved overall code quality and reduced technical debt.</p>
        <h2>Conclusion</h2>
        <p>The unlockable content feature in Gardener's Grove was a challenging yet rewarding exercise in object-oriented design. While the implementation ultimately succeeded, several areas could have been improved by focusing on clear architecture, better communication, and disciplined branch management. By learning from these challenges, future projects can benefit from a more collaborative and structured approach, ensuring that both the code and the team function effectively.</p>
      `,
      tags: ["Java", "Spring Boot", "Jakarta"]
    },
    // Add more posts here
  ];

  return (
    <div className="posts-container">
      <div className="posts-grid">
        {blogPosts.map(post => (
          <article key={post.id} className="post-card">
            <header className="post-header">
              <h2>{post.title}</h2>
              <div className="post-meta">
                <span className="post-date">{post.date}</span>
                <div className="post-tags">
                  {post.tags.map(tag => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </header>
            <div className="post-summary">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
    
          </article>
        ))}
      </div>
    </div>
  );
};

export default Posts;
