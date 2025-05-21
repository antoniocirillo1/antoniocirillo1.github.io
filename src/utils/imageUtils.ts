/**
 * Utility functions for working with images in the application
 */

// Base path for images
const BASE_IMAGE_PATH = '/images';

// Image categories
export type ImageCategory = 
  | 'hero' 
  | 'about'
  | 'services'
  | 'projects'
  | 'testimonials'
  | 'team'
  | 'contact';

/**
 * Get the image path for a specific image
 * @param category The image category
 * @param filename The image filename
 * @returns The full path to the image
 */
export function getImagePath(category: ImageCategory, filename: string): string {
  return `${BASE_IMAGE_PATH}/${category}/${filename}`;
}

/**
 * Get a placeholder image path
 * @param category The image category
 * @param index Optional index for placeholder
 * @returns The path to a placeholder image
 */
export function getPlaceholderImage(category: ImageCategory, index: number = 1): string {
  return `${BASE_IMAGE_PATH}/placeholders/${category}-${index}.jpg`;
}

/**
 * Check if an image exists in the public directory
 * This is a client-side function that returns a Promise
 * @param imagePath The path to check
 * @returns Promise that resolves to true if the image exists, false otherwise
 */
export async function imageExists(imagePath: string): Promise<boolean> {
  try {
    const response = await fetch(imagePath, { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    return false;
  }
}

/**
 * Get an image path, falling back to a placeholder if the requested image doesn't exist
 * @param category The image category
 * @param filename The image filename
 * @param fallbackIndex Optional index for the placeholder fallback
 * @returns The path to use for the image
 */
export async function getImageWithFallback(
  category: ImageCategory, 
  filename: string, 
  fallbackIndex: number = 1
): Promise<string> {
  const imagePath = getImagePath(category, filename);
  const exists = await imageExists(imagePath);
  
  if (exists) {
    return imagePath;
  }
  
  return getPlaceholderImage(category, fallbackIndex);
}

/**
 * Generate a placeholder image URL using a service like Placeholding.com
 * @param width Width of the placeholder
 * @param height Height of the placeholder
 * @param text Optional text to display
 * @param bgColor Background color
 * @param textColor Text color
 * @returns URL for a placeholder image
 */
export function generatePlaceholderUrl(
  width: number, 
  height: number, 
  text: string = 'Immagine', 
  bgColor: string = 'E6D2B5', 
  textColor: string = '654321'
): string {
  return `https://placehold.co/${width}x${height}/${bgColor}/${textColor}?text=${encodeURIComponent(text)}`;
}
