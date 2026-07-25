// @ts-ignore
import html2pdf from 'html2pdf.js';

export const downloadLetterheadPDF = async (
  elementId: string, 
  fileName: string = 'Candela-Official-Letterhead.pdf'
) => {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error(`Element with ID '${elementId}' not found.`);
    return;
  }

  // Adding ": any" forces TypeScript to stop inspecting these specific properties
  const options: any = {
    margin: 0,
    filename: fileName,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 3, useCORS: true, logging: false },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  try {
    await html2pdf().set(options).from(element).save();
  } catch (error) {
    console.error('PDF generation failed:', error);
  }
};