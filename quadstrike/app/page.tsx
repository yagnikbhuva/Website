"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Shield, Lock, Database, Server, Globe, Smartphone, Code, AlertTriangle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ParticleBackground from "@/components/particle-background"

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  const services = [
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Web Application Security",
      description: "Comprehensive security testing for web applications to identify and remediate vulnerabilities.",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: "Mobile Application Security",
      description: "In-depth security assessment for iOS and Android applications to protect user data.",
    },
    {
      icon: <Server className="h-10 w-10 text-primary" />,
      title: "Network Security",
      description: "Thorough evaluation of network infrastructure to identify potential security gaps.",
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "API Security",
      description: "Detailed analysis of API endpoints to ensure secure data transmission and access control.",
    },
  ]

  const stats = [
    { value: "500+", label: "Clients Protected" },
    { value: "1000+", label: "Vulnerabilities Found" },
    { value: "99.9%", label: "Success Rate" },
    { value: "24/7", label: "Support Available" },
  ]

  return (
    <>
      {/* Hero Section */}
      <section ref={targetRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <ParticleBackground />

        <motion.div style={{ opacity, scale, y }} className="container px-4 md:px-6 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6"
          >
            Next-Generation Cybersecurity
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 gradient-text"
          >
            Secure Your Digital Future
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-[700px] mx-auto text-muted-foreground md:text-xl mb-8"
          >
            QuadStrike delivers cutting-edge cybersecurity solutions to protect your business from evolving threats. Our
            expert team provides comprehensive security testing and remediation strategies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white animate-pulse-glow">
              Get Started
            </Button>
            <Link href="/about">
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                Learn More
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-muted-foreground"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-background to-background/95">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold tracking-tighter mb-4"
            >
              Our <span className="gradient-text">Services</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-[700px] mx-auto text-muted-foreground md:text-lg"
            >
              Comprehensive security solutions tailored to protect your digital assets from evolving cyber threats.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="service-card"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
                <div className="mt-4">
                  <Link
                    href="/services"
                    className="text-primary hover:text-primary/80 text-sm font-medium inline-flex items-center"
                  >
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-1"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                Advanced Protection
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
                Stay One Step Ahead of <span className="gradient-text">Cyber Threats</span>
              </h2>
              <p className="text-muted-foreground md:text-lg mb-6">
                Our proactive approach to cybersecurity helps identify vulnerabilities before they can be exploited. We
                combine cutting-edge technology with expert analysis to provide comprehensive protection.
              </p>

              <ul className="space-y-4">
                {[
                  { icon: <Shield className="h-5 w-5 text-primary" />, text: "Continuous Vulnerability Scanning" },
                  { icon: <Lock className="h-5 w-5 text-primary" />, text: "Advanced Penetration Testing" },
                  { icon: <AlertTriangle className="h-5 w-5 text-primary" />, text: "Real-time Threat Detection" },
                  { icon: <Database className="h-5 w-5 text-primary" />, text: "Secure Data Protection" },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                      {item.icon}
                    </div>
                    <span>{item.text}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8">
                <Button className="bg-primary hover:bg-primary/90 text-white">Explore Features</Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary/20 to-red-500/20 blur-xl opacity-70"></div>
              <div className="relative rounded-xl overflow-hidden border border-border">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  width={800}
                  height={600}
                  alt="Cybersecurity Dashboard"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold tracking-tighter mb-4"
            >
              What Our <span className="gradient-text">Clients Say</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-[700px] mx-auto text-muted-foreground md:text-lg"
            >
              Trusted by leading companies worldwide to secure their digital assets.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "QuadStrike's comprehensive security assessment helped us identify critical vulnerabilities before they could be exploited. Their team's expertise is unmatched.",
                author: "Sarah Johnson",
                role: "CTO, TechCorp Inc.",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                quote:
                  "Implementing QuadStrike's security recommendations has significantly improved our security posture. We now have confidence in our application's security.",
                author: "Michael Chen",
                role: "Security Director, FinanceHub",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                quote:
                  "The team at QuadStrike goes above and beyond to ensure our systems are secure. Their proactive approach to cybersecurity has been invaluable.",
                author: "Emily Rodriguez",
                role: "VP of Engineering, DataSphere",
                image: "/placeholder.svg?height=100&width=100",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border relative"
              >
                <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-primary/20"
                  >
                    <path
                      d="M14.4 24H8V16.8C8 13.4 10.8 10.4 14.4 10.4V16C14.4 16.8 15.2 17.6 16 17.6H20C20.8 17.6 21.6 16.8 21.6 16V10.4C21.6 6.8 18.4 4 14.4 4H8C3.6 4 0 7.6 0 12V30.4C0 34.8 3.6 38.4 8 38.4H14.4C18.8 38.4 22.4 34.8 22.4 30.4V24C22.4 19.6 18.8 16 14.4 16V24ZM40 24H33.6V16.8C33.6 13.4 36.4 10.4 40 10.4V16C40 16.8 40.8 17.6 41.6 17.6H45.6C46.4 17.6 47.2 16.8 47.2 16V10.4C47.2 6.8 44 4 40 4H33.6C29.2 4 25.6 7.6 25.6 12V30.4C25.6 34.8 29.2 38.4 33.6 38.4H40C44.4 38.4 48 34.8 48 30.4V24C48 19.6 44.4 16 40 16V24Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <p className="text-muted-foreground mb-6 relative z-10">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    width={48}
                    height={48}
                    alt={testimonial.author}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-medium">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-red-600/30 z-0"></div>
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>

            <div className="relative z-10 py-12 px-6 md:py-20 md:px-12 text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold tracking-tighter mb-4"
              >
                Ready to Secure Your Digital Assets?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="max-w-[700px] mx-auto text-muted-foreground md:text-lg mb-8"
              >
                Get in touch with our security experts today and discover how QuadStrike can help protect your business
                from evolving cyber threats.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white animate-pulse-glow">
                  Schedule a Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                  View Case Studies
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

