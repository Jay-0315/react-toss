import SafeCheat from '~/components/svg/cheat.svg?react';
import SendMoney from '~/components/svg/money.svg?react';
import Reservaition from '~/components/svg/reservaiton.svg?react';

export default function TransferService() {
  return (
    <section className="h-[2311px]">
      <div className="container h-full bg-white py-[250px]">
        <div className="mb-[100px]">
          <h2 className="mb-[30px] text-[28px] leading-[1.3] font-[600] text-[#3182f6]">
            송금
          </h2>
          <p className="style={(color: 'rgb(107, 118, 132))}] text-[50px] leading-[1.4] font-[600]">
            간편하고 안전하게
            <br />
            수수료는 평생 무료로,
            <br />
            이런 송금 써보셨나요?
          </p>
        </div>
        <div className="flex justify-between">
          <div className="w-[510px]">
            <p className="item-center mb-[30px] flex gap-1 text-[28px] leading-[1.3] font-[600] text-[#3182f6]">
              <div className="h-[24px] w-[24px]">
                <SendMoney />
              </div>
              평생 무료 송금
            </p>
            <h1 className="style={(color: 'rgb(107, 118, 132))}] text-[32px] leading-[1.6] font-[600]">
              토스 평생 무료 송금으로 모두의 금융에 자유를
            </h1>

            <h2>
              누구에게 보내든 은행 상관 없이, 이제 토스와 함께 수수료 걱정 없이 송금하세요
            </h2>
          </div>
          <div className="w-[510px]">
            <img src="/image/susuryo.png" alt="susuryo" />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-[510px]">
            <img src="/image/cheat.png" alt="cheat" />
          </div>
          <div className="w-[510px]">
            <p className="item-center mb-[30px] flex gap-1 text-[28px] leading-[1.3] font-[600] text-[#3182f6]">
              <div className="h-[24px] w-[24px]">
                <SafeCheat />
              </div>
              사기계좌 조회
            </p>
            <h2 className="style={(color: 'rgb(107, 118, 132))}] text-[32px] leading-[1.6] font-[600]">
              송금 전 사기 내역 조회로 피해를 미리 방지할 수 있어요{' '}
            </h2>

            <p>
              송금 전 토스가 알아서 사기 내역 조회를 해드려요. 상대방의 연락처 또는 계좌가
              사기 계좌인지 조회해 안전하게 송금할 수 있어요.
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-[510px]">
            <p className="item-center mb-[30px] flex gap-1 text-[28px] leading-[1.3] font-[600] text-[#3182f6]">
              <div className="h-[24px] w-[24px]">
                <Reservaition />
              </div>
              자동이체 예약
            </p>
            <h2 className="style={(color: 'rgb(107, 118, 132))}] text-[32px] leading-[1.6] font-[600]">
              은행 점검 시간, 기다릴 필요 없어요
            </h2>

            <p>
              은행 점검 시간에는 자동이체 예약을 이용해보세요. 점검 시간이 끝나면 토스가
              알아서 송금해드릴게요.
            </p>
          </div>
          <div className="w-[510px]">
            <img src="/image/scan.png" alt="scan" />
          </div>
        </div>
      </div>
    </section>
  );
}
