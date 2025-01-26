import AOS from 'aos'
import 'aos/dist/aos.css'

/** Start AOS */
export const initializeAOS = () => AOS.init()

/**
 * Calculates a delay for an animation based on the element's position.
 * @param id - The index or ID of the element in the sequence.
 * @returns The delay for the animation in milliseconds.
 */

export const getDelay = (id: number) => (id % 2) * 200
