import React from 'react'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
      <div className="mt-auto flex w-full items-center justify-center bg-red-50 py-4">
          <h2 className="text-2xl flex items-center gap-2">
          Copyright © 2023 | Built with 🧡 by{' '}
              <a
                  href="https://github.com/chingu-voyages/v42-geckos-team-23"
                  target="_blank"
                  rel="noopener"
                  arial-label="GitHub"
              >
                  <FaGithub />
              </a>
          </h2>
      </div>
  )
}

export default Footer
