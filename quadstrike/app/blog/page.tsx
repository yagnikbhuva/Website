"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Calendar, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "Cybersecurity Trends 2024",
    excerpt: "Explore the emerging threats and technologies shaping the cybersecurity landscape in 2024.",
    slug: "cybersecurity-trends-2024",
    image: "/placeholder.svg?height=400&width=600",
    date: "March 15, 2024",
    author: "Sarah Johnson",
    categories: ["Trends", "Research"],
  },
  {
    id: 2,
    title: "Advanced VAPT Techniques",
    excerpt:
      "Learn about the latest penetration testing methodologies and how they can strengthen your security posture.",
    slug: "advanced-vapt-techniques",
    image: "/placeholder.svg?height=400&width=600",
    date: "February 28, 2024",
    author: "Michael Chen",
    categories: ["VAPT", "Technical"],
  },
  {
    id: 3,
    title: "Securing Cloud Infrastructure",
    excerpt: "Best practices for securing your cloud infrastructure against sophisticated cyber attacks.",
    slug: "securing-cloud-infrastructure",
    image: "/placeholder.svg?height=400&width=600",
    date: "February 10, 2024",
    author: "Emily Rodriguez",
    categories: ["Cloud", "Best Practices"],
  },
  {
    id: 4,
    title: "The Rise of AI in Cybersecurity",
    excerpt: "How artificial intelligence is transforming both cyber attacks and defense mechanisms.",
    slug: "ai-in-cybersecurity",
    image: "/placeholder.svg?height=400&width=600",
    date: "January 25, 2024",
    author: "David Kim",
    categories: ["AI", "Innovation"],
  },
  {
    id: 5,
    title: "Mobile App Security Essentials",
    excerpt: "Essential security considerations for developing and maintaining secure mobile applications.",
    slug: "mobile-app-security-essentials",
    image: "/placeholder.svg?height=400&width=600",
    date: "January 12, 2024",
    author: "Lisa Wang",
    categories: ["Mobile", "Security"],
  },
  {
    id: 6,
    title: "Zero Trust Architecture Implementation",
    excerpt: "A comprehensive guide to implementing Zero Trust Architecture in your organization.",
    slug: "zero-trust-architecture-implementation",
    image: "/placeholder.svg?height=400&width=600",
    date: "December 18, 2023",
    author: "Robert Martinez",
    categories: ["Architecture", "Best Practices"],
  },
]

// All unique categories from blog posts
const allCategories = Array.from(new Set(blogPosts.flatMap((post) => post.categories)))

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Filter posts based on search query and selected category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = selectedCategory ? post.categories.includes(selectedCategory) : true

    return matchesSearch && matchesCategory
  })

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-background to-background/95">
        <div className="container px-4 md:px-6">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold tracking-tighter mb-4"
            >
              Our <span className="gradient-text">Blog</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-[700px] mx-auto text-muted-foreground md:text-xl mb-12"
            >
              Stay updated with the latest cybersecurity insights, trends, and best practices.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto mb-12"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-2 justify-center mb-12"
          >
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(null)}
              className={selectedCategory === null ? "bg-primary text-white" : ""}
            >
              All
            </Button>
            {allCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-primary text-white" : ""}
              >
                {category}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full overflow-hidden hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 border-border">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {post.categories.map((category) => (
                          <Badge
                            key={category}
                            variant="secondary"
                            className="bg-primary/10 text-primary hover:bg-primary/20"
                          >
                            {category}
                          </Badge>
                        ))}
                      </div>
                      <CardTitle className="line-clamp-2 hover:text-primary transition-colors">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground line-clamp-3 mb-4">{post.excerpt}</p>
                    </CardContent>
                    <CardFooter className="flex justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <h3 className="text-xl font-medium mb-2">No articles found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold tracking-tighter mb-4"
            >
              Stay Updated
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-muted-foreground md:text-lg mb-8"
            >
              Subscribe to our newsletter to receive the latest cybersecurity insights and updates.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button className="bg-primary hover:bg-primary/90 text-white">Subscribe</Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

