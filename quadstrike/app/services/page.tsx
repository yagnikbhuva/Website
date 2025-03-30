"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe, Smartphone, Server, Code, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("web")

  const services = [
    {
      id: "web",
      icon: <Globe className="h-6 w-6" />,
      title: "Web Application Security",
      description: "Comprehensive security testing for web applications to identify and remediate vulnerabilities.",
      features: [
        "Static Application Security Testing (SAST)",
        "Dynamic Application Security Testing (DAST)",
        "Vulnerability Assessment",
        "Secure Code Review",
        "Authentication & Authorization Testing",
        "Input Validation Testing",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "mobile",
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Application Security",
      description: "In-depth security assessment for iOS and Android applications to protect user data.",
      features: [
        "Binary Analysis",
        "Local Storage Security",
        "Network Communication Testing",
        "Authentication Mechanism Review",
        "Session Management Testing",
        "Client-Side Injection Testing",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "network",
      icon: <Server className="h-6 w-6" />,
      title: "Network Security",
      description: "Thorough evaluation of network infrastructure to identify potential security gaps.",
      features: [
        "External & Internal Network Penetration Testing",
        "Firewall Configuration Review",
        "Network Architecture Assessment",
        "Wireless Network Security Testing",
        "VPN Security Assessment",
        "Social Engineering Testing",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "api",
      icon: <Code className="h-6 w-6" />,
      title: "API Security",
      description: "Detailed analysis of API endpoints to ensure secure data transmission and access control.",
      features: [
        "API Authentication Testing",
        "Authorization Testing",
        "Input Validation Testing",
        "Rate Limiting Assessment",
        "Business Logic Testing",
        "Documentation Review",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

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
              Our <span className="gradient-text">Services</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-[700px] mx-auto text-muted-foreground md:text-xl mb-12"
            >
              Comprehensive security solutions tailored to protect your digital assets from evolving cyber threats.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Tabs defaultValue="web" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-transparent h-auto">
                {services.map((service) => (
                  <TabsTrigger
                    key={service.id}
                    value={service.id}
                    className={`flex items-center gap-2 py-3 px-4 rounded-lg border ${
                      activeTab === service.id
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border bg-card hover:bg-muted"
                    } transition-all duration-200`}
                  >
                    {service.icon}
                    <span className="hidden md:inline">{service.title.split(" ")[0]}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {services.map((service) => (
                <TabsContent key={service.id} value={service.id} className="mt-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h2>
                      <p className="text-muted-foreground mb-6">{service.description}</p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Button className="bg-primary hover:bg-primary/90 text-white">Request a Quote</Button>
                    </div>

                    <div className="relative rounded-xl overflow-hidden border border-border">
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-blue-500/20 blur-md opacity-70"></div>
                      <div className="relative">
                        <Image
                          src={service.image || "/placeholder.svg"}
                          width={600}
                          height={400}
                          alt={service.title}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
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
              Our <span className="gradient-text">Process</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-[700px] mx-auto text-muted-foreground md:text-lg"
            >
              Our systematic approach ensures thorough security assessment and remediation.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Discovery",
                description:
                  "We gather information about your systems, applications, and infrastructure to understand the scope.",
                icon: (
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
                    className="h-10 w-10 text-primary"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m15 9-6 6" />
                    <path d="m9 9 6 6" />
                  </svg>
                ),
              },
              {
                number: "02",
                title: "Assessment",
                description:
                  "Our security experts conduct comprehensive testing to identify vulnerabilities and security gaps.",
                icon: (
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
                    className="h-10 w-10 text-primary"
                  >
                    <path d="M2 12h20" />
                    <path d="M10 16v-4a2 2 0 0 1 4 0v4" />
                    <path d="M4 16v-4a2 2 0 0 1 4 0v4" />
                    <path d="M16 16v-4a2 2 0 0 1 4 0v4" />
                  </svg>
                ),
              },
              {
                number: "03",
                title: "Remediation",
                description: "We provide detailed recommendations and support to address identified vulnerabilities.",
                icon: (
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
                    className="h-10 w-10 text-primary"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                ),
              },
              {
                number: "04",
                title: "Verification",
                description:
                  "We verify that all vulnerabilities have been properly addressed and your systems are secure.",
                icon: (
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
                    className="h-10 w-10 text-primary"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                ),
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <Card className="h-full bg-card border-border relative z-10">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-4xl font-bold text-primary/20">{step.number}</div>
                      <div>{step.icon}</div>
                    </div>
                    <CardTitle>{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{step.description}</CardDescription>
                  </CardContent>
                </Card>

                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-0">
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
                      className="text-primary"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-blue-600/30 z-0"></div>
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
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                    Contact Us
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

