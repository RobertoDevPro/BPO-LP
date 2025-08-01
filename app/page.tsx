"use client"

import Image from "next/image"
import { CheckCircle2, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Home() {
  const handleCTA = (message: string) => {
    window.open(`https://wa.me/554185113598?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-slate-900 to-blue-900 text-white min-h-screen flex items-center overflow-hidden pt-16 sm:pt-20">
        {/* Imagem decorativa inclinada no canto direito */}
        <div className="absolute right-0 top-0 h-full w-full lg:w-1/2 z-0 pointer-events-none">
          <img
            src="/images/business-hero.png"
            alt="Business Hero"
            className="absolute right-0 top-0 h-[120%] w-auto transform rotate-6 opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-slate-900/40 to-blue-900/60"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Headline Principal */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              <span className="text-red-500">Delegue o Financeiro</span> da Sua Empresa com{" "}
              <span className="text-green-400">Segurança Total</span>
            </h1>

            {/* Subtítulo de Urgência */}
            <div className="bg-yellow-600/20 border-2 border-yellow-500/50 rounded-2xl p-6 sm:p-8 mb-8 max-w-3xl mx-auto">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-300 mb-4">
                Chegou a hora de sair do operacional e focar no estratégico
              </h2>
              <p className="text-gray-200 text-lg leading-relaxed">
                Se você ainda cuida do financeiro no improviso — com planilhas soltas, boletos perdidos, prazos vencendo
                e sem saber quem deve — isso está custando caro para o seu negócio.
              </p>
            </div>

            {/* Descrição Principal */}
            <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed mb-10 max-w-4xl mx-auto">
              Conheça o <strong className="text-white">BPO Financeiro da Magnum</strong>: controle total das suas
              finanças com relatórios organizados, conciliação bancária e acompanhamento estratégico contínuo.
            </p>

            {/* Benefícios em Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <CheckCircle2 className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <p className="text-white font-semibold">Planos Personalizados</p>
                <p className="text-gray-300 text-sm mt-2">Conforme o tamanho da sua empresa</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <CheckCircle2 className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <p className="text-white font-semibold">Decisões Baseadas em Dados</p>
                <p className="text-gray-300 text-sm mt-2">Mais organização e clareza total</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <CheckCircle2 className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <p className="text-white font-semibold">Atendimento Direto</p>
                <p className="text-gray-300 text-sm mt-2">Online com consultor especializado</p>
              </div>
            </div>

            {/* Destaque Final */}
            <div className="bg-blue-600/30 border-2 border-blue-400/50 rounded-2xl p-6 mb-10 max-w-3xl mx-auto">
              <p className="text-blue-200 font-bold text-lg sm:text-xl">
                Seu negócio precisa de um financeiro organizado e profissional, mesmo sem ter um departamento inteiro.
              </p>
            </div>

            {/* CTA Principal */}
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg sm:text-xl font-bold rounded-xl shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105"
              onClick={() =>
                handleCTA(
                  "Olá! Quero saber mais sobre o BPO Financeiro da Magnum. Pode me apresentar os planos e como funciona?",
                )
              }
            >
              QUERO CONHECER OS PLANOS DE BPO FINANCEIRO
            </Button>
          </div>
        </div>
      </section>

      {/* BPO EXPLANATION SECTION */}
      <section className="py-12 sm:py-20 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                O que é o <span className="text-blue-600">BPO Financeiro</span> da Magnum?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto mb-12">
                BPO significa Business Process Outsourcing, ou seja: nós assumimos a rotina financeira da sua empresa
                para que você possa focar no crescimento.
              </p>

              {/* Lista de Serviços em Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
                  <CheckCircle2 className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Controle de Contas</h3>
                  <p className="text-gray-600 text-sm">Contas a pagar e a receber organizadas e controladas</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
                  <CheckCircle2 className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Conciliação Bancária</h3>
                  <p className="text-gray-600 text-sm">Garantia de precisão dos saldos e movimentações</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
                  <CheckCircle2 className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Relatórios Financeiros</h3>
                  <p className="text-gray-600 text-sm">Práticos, atualizados e fáceis de entender</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
                  <CheckCircle2 className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Consultoria Contínua</h3>
                  <p className="text-gray-600 text-sm">Para tomada de decisões estratégicas</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
                  <CheckCircle2 className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Reuniões Mensais</h3>
                  <p className="text-gray-600 text-sm">Análise de resultados e direcionamento</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
                  <CheckCircle2 className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Sistema de Gestão</h3>
                  <p className="text-gray-600 text-sm">Acesso em tempo real com segurança total</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-bold rounded-lg w-full max-w-sm sm:max-w-md lg:max-w-none lg:w-auto mx-auto flex items-center justify-center gap-2"
                onClick={() =>
                  handleCTA(
                    "Olá! Quero saber mais sobre o BPO Financeiro da Magnum. Pode me apresentar os planos e como funciona?",
                  )
                }
              >
                <span className="text-center leading-tight">QUERO UM BPO FINANCEIRO PARA MINHA EMPRESA</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESSO SECTION */}
      <section className="py-12 sm:py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Como funciona o <span className="text-blue-400">processo</span>?
              </h2>
            </div>

            <div className="space-y-6 sm:space-y-8">
              {/* Etapa 1 */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all bg-white">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                      <span className="text-white font-bold text-xl">1</span>
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Diagnóstico inicial gratuito</h3>
                      <p className="text-gray-600 text-base sm:text-lg">
                        Entendemos sua rotina e estrutura atual para criar a melhor solução.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Etapa 2 */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all bg-white">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                      <span className="text-white font-bold text-xl">2</span>
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Definição do plano ideal</h3>
                      <p className="text-gray-600 text-base sm:text-lg">
                        Montamos um pacote sob medida para sua realidade e necessidades.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Etapa 3 */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all bg-white">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                      <span className="text-white font-bold text-xl">3</span>
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                        Implantação organizada e rápida
                      </h3>
                      <p className="text-gray-600 text-base sm:text-lg">
                        Cuidamos da transição com o mínimo impacto no seu dia a dia.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Etapa 4 */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all bg-white">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                      <span className="text-white font-bold text-xl">4</span>
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                        Operação contínua + consultoria ativa
                      </h3>
                      <p className="text-gray-600 text-base sm:text-lg">
                        Você acompanha tudo com relatórios claros e reuniões mensais.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTADOS SECTION */}
      <section className="py-12 sm:py-20 bg-orange-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12">
                O que muda na prática com o nosso <span className="text-orange-600">BPO</span>?
              </h2>

              {/* Benefícios em Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-100">
                  <CheckCircle2 className="w-8 h-8 text-orange-600 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Mais Tempo Livre</h3>
                  <p className="text-gray-600 text-sm">Para cuidar de vendas, equipe e clientes</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-100">
                  <CheckCircle2 className="w-8 h-8 text-orange-600 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Fluxo de Caixa Controlado</h3>
                  <p className="text-gray-600 text-sm">Previsível e organizado</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-100">
                  <CheckCircle2 className="w-8 h-8 text-orange-600 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Redução de Falhas</h3>
                  <p className="text-gray-600 text-sm">Menos prejuízos financeiros</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-100">
                  <CheckCircle2 className="w-8 h-8 text-orange-600 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Decisões Baseadas em Dados</h3>
                  <p className="text-gray-600 text-sm">Não em achismos ou intuição</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-100">
                  <CheckCircle2 className="w-8 h-8 text-orange-600 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Clareza Total</h3>
                  <p className="text-gray-600 text-sm">Sobre a saúde financeira da empresa</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-100">
                  <CheckCircle2 className="w-8 h-8 text-orange-600 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Foco no Estratégico</h3>
                  <p className="text-gray-600 text-sm">Saia do operacional e cresça</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-bold rounded-lg w-full max-w-sm sm:max-w-md lg:max-w-none lg:w-auto mx-auto flex items-center justify-center gap-2"
                onClick={() =>
                  handleCTA(
                    "Olá! Quero saber mais sobre o BPO Financeiro da Magnum. Pode me apresentar os planos e como funciona?",
                  )
                }
              >
                <span className="text-center leading-tight">QUERO CONHECER OS PLANOS DE BPO FINANCEIRO</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AUTORIDADE SECTION */}
      <section className="py-12 sm:py-20 bg-amber-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Sobre a <span className="text-red-600">Magnum</span> Consultoria Empresarial
              </h2>
            </div>

            <Card className="border-0 shadow-xl bg-white overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/3 relative">
                    <Image
                      src="/images/fernando-cruz.jpg"
                      alt="Fernando Cruz Ferreira"
                      width={400}
                      height={500}
                      className="w-full h-auto max-h-96 lg:h-full lg:max-h-none object-contain lg:object-cover object-center rounded-t-lg lg:rounded-l-lg lg:rounded-t-none"
                    />
                  </div>
                  <div className="lg:w-2/3 p-8 sm:p-12">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Fernando Cruz Ferreira</h3>
                    <p className="text-base sm:text-lg text-gray-600 mb-6">
                      Administrador fundador da Magnum Consultoria Empresarial, especialista MBA em gestão estratégica e
                      financeira. Mais de 5 anos atendendo micro e pequenas empresas. Atuação 100% online, com processos
                      organizados e atendimento direto.
                    </p>

                    <div className="bg-blue-50 rounded-lg p-6">
                      <p className="text-gray-700 text-base font-medium">
                        Atendemos empresas de todo o Brasil com foco em resultado e confiança.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* PLANOS SECTION */}
      <section className="py-12 sm:py-20 bg-red-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Planos personalizados conforme o tamanho e necessidade da{" "}
              <span className="text-red-600">sua empresa</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Não acreditamos em pacotes engessados. Aqui, o serviço se adapta a você — com a estrutura certa para a sua
              operação. Desde o empresário individual até negócios com equipe e alto volume de movimentação.
            </p>

            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 sm:p-12 text-white mb-12">
              <p className="text-lg sm:text-xl lg:text-2xl font-bold">Quer saber qual plano se encaixa no seu caso?</p>
            </div>

            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-4 sm:px-8 py-3 sm:py-6 text-sm sm:text-base lg:text-lg font-bold rounded-lg w-full max-w-sm sm:max-w-md lg:max-w-none lg:w-auto mx-auto flex items-center justify-center gap-2"
              onClick={() =>
                handleCTA(
                  "Olá! Quero saber mais sobre o BPO Financeiro da Magnum. Pode me apresentar os planos e como funciona?",
                )
              }
            >
              <span className="text-center leading-tight">QUERO FALAR AGORA PELO WHATSAPP</span>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA FINAL SECTION */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              Delegue o financeiro da sua empresa <span className="text-green-400">com segurança!</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-12">
              Transforme a gestão financeira do seu negócio com o BPO da Magnum.
            </p>

            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-3 sm:px-6 py-3 sm:py-6 text-xs sm:text-base lg:text-lg font-bold rounded-lg shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 mb-8 w-full max-w-[320px] sm:max-w-sm lg:max-w-none lg:w-auto mx-auto flex items-center justify-center gap-2"
              onClick={() =>
                handleCTA(
                  "Olá! Quero saber mais sobre o BPO Financeiro da Magnum. Pode me apresentar os planos e como funciona?",
                )
              }
            >
              <span className="text-center leading-tight">QUERO CONHECER OS PLANOS DE BPO FINANCEIRO</span>
            </Button>

            <div className="mt-1 p-6 sm:p- bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
              <div className="flex justify-center mb-0">
                <Image
                  src="/images/logo.png"
                  alt="Magnum Consultoria Empresarial"
                  width={450}
                  height={60}
                  className="h-auto brightness-0 invert"
                />
              </div>
              <p className="text-base sm:text-lg text-green-200 font-medium">
                Transformando a gestão financeira de empresas desde 2020
              </p>
              <div className="flex items-center justify-center mt-4 text-gray-300">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2 flex-shrink-0" />
                <span className="text-sm sm:text-base">BPO Financeiro especializado e personalizado</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </main>
  )
}
