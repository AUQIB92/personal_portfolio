import React from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Trophy, Star } from "lucide-react"

export default function CongratulationsMessage({ stars }) {
  const launchConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }

  React.useEffect(() => {
    launchConfetti()
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
      <Card className="w-full max-w-md mx-auto overflow-hidden bg-gradient-to-br from-teal-400 to-blue-500 shadow-2xl">
        <CardContent className="p-6">
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, loop: Infinity, ease: "linear" }}
              className="inline-block mb-4"
            >
              <Trophy className="w-16 h-16 text-yellow-300" />
            </motion.div>
            <h2 className="text-3xl font-bold text-white mb-2">Congratulations!</h2>
            <p className="text-xl text-teal-100 mb-6">You worked hard for your major exam!</p>
            
            {/* Render stars based on the passed stars prop */}
            <div className="flex justify-center space-x-2 mb-4">
              {[...Array(stars)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 1, delay: i * 0.1, repeat: Infinity }}
                >
                  <Star className="w-6 h-6 text-yellow-300 fill-current" />
                </motion.div>
              ))}
              {[...Array(5 - stars)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 1, delay: (stars + i) * 0.1, repeat: Infinity }}
                >
                  <Star className="w-6 h-6 text-gray-300" />
                </motion.div>
              ))}
            </div>

            <Button
              onClick={launchConfetti}
              className="bg-white text-teal-600 hover:bg-teal-100 transition-colors duration-300"
            >
              Celebrate!
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
