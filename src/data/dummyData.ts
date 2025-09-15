import { ScreenshotTypeEnum, type ScreencaptureData } from '../types';

export const screenshots: Record<string, ScreencaptureData> = {
  abc123: {
    id: 'abc123',
    name: 'Landing Page - E-commerce Store',
    createdAt: '2024-01-15',
    author: 'João Silva',
    imageUrl:
      'https://via.placeholder.com/1200x800/4F46E5/FFFFFF?text=E-commerce+Landing+Page',
    thumbnailUrl:
      'https://via.placeholder.com/400x300/4F46E5/FFFFFF?text=E-commerce+Thumb',
    htmlContent: `
      <div style="font-family: Arial, sans-serif; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh;">
        <div style="max-width: 1200px; margin: 0 auto;">
          <header style="text-align: center; color: white; margin-bottom: 40px;">
            <h1 style="font-size: 3rem; margin-bottom: 1rem;">TechStore</h1>
            <p style="font-size: 1.2rem; opacity: 0.9;">Os melhores produtos tecnológicos</p>
          </header>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
            <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
              <h3>Smartphones</h3>
              <p>Últimos modelos com tecnologia avançada</p>
              <button style="background: #667eea; color: white; border: none; padding: 10px 20px; border-radius: 5px;">Ver Produtos</button>
            </div>
            <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
              <h3>Laptops</h3>
              <p>Performance e portabilidade</p>
              <button style="background: #667eea; color: white; border: none; padding: 10px 20px; border-radius: 5px;">Ver Produtos</button>
            </div>
            <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
              <h3>Acessórios</h3>
              <p>Complemente sua experiência</p>
              <button style="background: #667eea; color: white; border: none; padding: 10px 20px; border-radius: 5px;">Ver Produtos</button>
            </div>
          </div>
        </div>
      </div>
    `,
    contentType: ScreenshotTypeEnum.HTML,
  },
  def456: {
    id: 'def456',
    name: 'Portfolio - Designer Criativo',
    createdAt: '2024-01-10',
    author: 'Maria Santos',
    imageUrl:
      'https://via.placeholder.com/1200x800/059669/FFFFFF?text=Creative+Portfolio',
    thumbnailUrl:
      'https://via.placeholder.com/400x300/059669/FFFFFF?text=Portfolio+Thumb',
    htmlContent: `
      <div style="font-family: 'Georgia', serif; background: #f8fafc; min-height: 100vh; padding: 40px 20px;">
        <div style="max-width: 800px; margin: 0 auto;">
          <div style="text-align: center; margin-bottom: 60px;">
            <div style="width: 120px; height: 120px; background: #059669; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; color: white; font-size: 2rem; font-weight: bold;">MS</div>
            <h1 style="font-size: 2.5rem; color: #1f2937; margin-bottom: 10px;">Maria Santos</h1>
            <p style="font-size: 1.2rem; color: #6b7280;">Designer Gráfica & UI/UX</p>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px;">
            <div style="background: white; padding: 30px; border-radius: 15px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border-left: 4px solid #059669;">
              <h3 style="color: #1f2937; margin-bottom: 15px;">Branding</h3>
              <p style="color: #6b7280; line-height: 1.6;">Criação de identidades visuais únicas e memoráveis para marcas de todos os tamanhos.</p>
            </div>
            <div style="background: white; padding: 30px; border-radius: 15px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border-left: 4px solid #059669;">
              <h3 style="color: #1f2937; margin-bottom: 15px;">Web Design</h3>
              <p style="color: #6b7280; line-height: 1.6;">Interfaces modernas e funcionais que proporcionam experiências excepcionais.</p>
            </div>
          </div>
        </div>
      </div>
    `,
    contentType: ScreenshotTypeEnum.HTML,
  },
  ghi789: {
    id: 'ghi789',
    name: 'Blog - Tecnologia',
    createdAt: '2024-01-08',
    author: 'Pedro Costa',
    imageUrl:
      'https://via.placeholder.com/1200x800/DC2626/FFFFFF?text=Tech+Blog',
    thumbnailUrl:
      'https://via.placeholder.com/400x300/DC2626/FFFFFF?text=Blog+Thumb',
    htmlContent: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #111827; color: white; min-height: 100vh;">
        <header style="background: #1f2937; padding: 20px 0; border-bottom: 1px solid #374151;">
          <div style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">
            <h1 style="font-size: 1.8rem; font-weight: bold; color: #f59e0b;">TechInsights</h1>
          </div>
        </header>
        <main style="max-width: 1200px; margin: 0 auto; padding: 40px 20px;">
          <article style="background: #1f2937; padding: 40px; border-radius: 10px; margin-bottom: 30px;">
            <h2 style="font-size: 2rem; margin-bottom: 20px; color: #f9fafb;">O Futuro da Inteligência Artificial</h2>
            <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 20px; color: #9ca3af; font-size: 0.9rem;">
              <span>Por Pedro Costa</span>
              <span>•</span>
              <span>8 Jan 2024</span>
              <span>•</span>
              <span>5 min de leitura</span>
            </div>
            <p style="line-height: 1.7; color: #d1d5db; margin-bottom: 20px;">
              A inteligência artificial está revolutionando a forma como interagimos com a tecnologia. 
              Neste artigo, exploramos as tendências emergentes e o impacto que terão no futuro.
            </p>
            <button style="background: #f59e0b; color: #111827; border: none; padding: 12px 24px; border-radius: 6px; font-weight: 600;">
              Ler mais
            </button>
          </article>
        </main>
      </div>
    `,
    contentType: ScreenshotTypeEnum.HTML,
  },
};
