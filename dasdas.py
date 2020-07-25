char=input("1.Ironman 2.CaptainAmerica 3. Thor\n 당신의 캐릭터 번호를 선택해주세요(1,2,3)")
Ironman={'att': 70,'def': 50, 'health': 100}
CaptainAmerica={'att': 60,'def': 50, 'health': 100}
Thor={'att': 90,'def': 20, 'health': 100}
Thanos={'att': 100,'def': 50, 'health': 100}
user=0

if char = '1':
    user= Ironman
    random=random.choice (2,3)
elif char = '2':
    user=CaptainAmerica
    random = random.choice(1, 3)
elif  char = '3':
    user=Thor
    random = random.choice(2, 1)


class Fight :
    def atttak(self,user, random):

        random['health']=user['att']-random['def']
        if random['health']<=0 :
            print('당신이 이겼습니다')


    def defense(self,user, random):

        user['health']=random['att']-user['def']
        if user['health']<=0 :
            print('당신이 졌습니다')


    def character_info(self,user, random):

        print('***첫번째 스테이지***\n ---내 케릭터---\n 이름':user ,\n'공격력':user['att'],\n'방어력':user['def'],\n '체력':user['health']
                  '---적 케릭터---'\n '이름':user ,\n'공격력':user['att'],\n'방어력':user['def'],\n '체력':user['health'])