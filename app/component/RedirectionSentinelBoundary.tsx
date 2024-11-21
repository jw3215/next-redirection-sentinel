'use client'

import { Component } from 'react'

interface Props {
  children: React.ReactNode
  pathMap: Record<string, string>
}

class RedirectionSentinelBoundary extends Component<Props> {
  componentDidCatch(error: unknown): void {
    const pathMap = this.props.pathMap

    if (!error || typeof error !== 'object' || !('digest' in error)) {
      throw error
    }
    if (typeof error.digest !== 'string') {
      throw error
    }

    const splittedRedirectionDigest = error.digest.split(';')
    const originalPath = splittedRedirectionDigest[2]

    Object.entries(pathMap).forEach(([from, to]) => {
      if (from.includes(originalPath)) {
        splittedRedirectionDigest[2] = splittedRedirectionDigest[2].replace(from, to)
        error.digest = splittedRedirectionDigest.join(';')
      }
    })

    throw error
  }

  render() {
    return this.props.children
  }
}

export default RedirectionSentinelBoundary
