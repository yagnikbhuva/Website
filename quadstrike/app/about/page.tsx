"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Shield, Award, Users, Zap, Lock, Clock, CheckCircle, Target } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  const values = [
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Integrity",
      description: "We operate with complete transparency and honesty in all our client engagements.",
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Innovation",
      description: "We continuously evolve our methodologies to stay ahead of emerging cyber threats.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Client-Centricity",
      description: "We tailor our approach to meet the unique security needs of each client.",
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Excellence",
      description: "We hold ourselves to the highest standards in everything we do.",
    },
  ]

  const differentiators = [
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: "Tailored Approach",
      description: "We customize our security solutions to address your specific business needs and risk profile.",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      title: "Comprehensive Coverage",
      description: "Our holistic security assessments leave no stone unturned, providing complete protection.",
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Rapid Response",
      description: "Our team delivers quick turnaround times without compromising on quality or thoroughness.",
    },
    {
      icon: <Lock className="h-6 w-6 text-primary" />,
      title: "Ongoing Support",
      description: "We provide continuous guidance and support beyond the initial engagement.",
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
              About <span className="gradient-text">QuadStrike</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-[700px] mx-auto text-muted-foreground md:text-xl mb-12"
            >
              Your trusted partner in cybersecurity, dedicated to protecting your digital assets with expertise and
              innovation.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                Our Mission
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
                Securing the Digital Future of <span className="gradient-text">Every Business</span>
              </h2>
              <p className="text-muted-foreground md:text-lg mb-6">
                At QuadStrike, our mission is to democratize access to enterprise-grade cybersecurity solutions. We
                believe that every organization, regardless of size, deserves robust protection against evolving cyber
                threats.
              </p>
              <p className="text-muted-foreground md:text-lg mb-6">
                We combine cutting-edge technology with human expertise to deliver comprehensive security solutions that
                not only identify vulnerabilities but also provide actionable remediation strategies to strengthen your
                security posture.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary hover:bg-primary/90 text-white">Our Services</Button>
                <Button variant="outline" className="border-primary/50 hover:bg-primary/10">
                  Contact Us
                </Button>
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
                  alt="Cybersecurity Team"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6"
            >
              Our Philosophy
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold tracking-tighter mb-4"
            >
              Core <span className="gradient-text">Values</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-[700px] mx-auto text-muted-foreground md:text-lg"
            >
              These principles guide everything we do and shape how we deliver value to our clients.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="service-card text-center"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                Why QuadStrike
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
                What Sets Us <span className="gradient-text">Apart</span>
              </h2>
              <p className="text-muted-foreground md:text-lg mb-6">
                We combine technical expertise with a client-centric approach to deliver security solutions that truly
                make a difference. Our commitment to excellence and innovation ensures that your digital assets receive
                the protection they deserve.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                {differentiators.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
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
                <div className="flex justify-center p-8">
                  <div className="relative w-48 h-48 md:w-64 md:h-64">
                    <Image src="/images/quadstrike-logo.png" alt="QuadStrike Logo" fill className="object-contain" />
                  </div>
                </div>
              </div>
            </motion.div>
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
                Contact us today for a free consultation and discover how QuadStrike can help protect your business from
                evolving cyber threats.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white animate-pulse-glow">
                  Schedule a Free Consultation
                </Button>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                    Explore Our Services
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

